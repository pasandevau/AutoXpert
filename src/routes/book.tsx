import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CalendarIcon, Clock, MapPin, Car, MessageSquare, User, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Online — AutoXpert Group Mobile Mechanic" },
      { name: "description", content: "Book your mobile mechanic visit online. Choose a date, time and suburb — AutoXpert Group comes to you, 24/7." },
      { property: "og:title", content: "Book a Mobile Mechanic — AutoXpert Group" },
      { property: "og:description", content: "Schedule your service in seconds. Date, time, suburb, vehicle — done." },
    ],
  }),
  component: BookPage,
});

const TIME_SLOTS = [
  "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM",
  "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
] as const;

const SERVICES = [
  "Mobile Mechanic Visit",
  "Logbook Service",
  "Brake Repair",
  "Battery Replacement",
  "Pre-Purchase Inspection",
  "Diagnostics",
  "Cooling System",
  "Other (describe below)",
] as const;

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  suburb: z.string().trim().min(2, "Suburb is required").max(100),
  date: z.date({ required_error: "Please choose a preferred date" }),
  time: z.string().min(1, "Please choose a preferred time"),
  service: z.string().min(1, "Please choose a service"),
  vehicleMake: z.string().trim().min(1, "Make is required").max(50),
  vehicleModel: z.string().trim().min(1, "Model is required").max(50),
  vehicleYear: z
    .string()
    .trim()
    .regex(/^(19|20)\d{2}$/, "Enter a valid 4-digit year"),
  rego: z.string().trim().max(10).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please describe the issue or service required (min 10 characters)")
    .max(1000, "Message must be under 1000 characters"),
});

type BookingValues = z.infer<typeof bookingSchema>;

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      suburb: "",
      time: "",
      service: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      rego: "",
      message: "",
    },
  });

  function onSubmit(values: BookingValues) {
    // In production this would POST to a server function / email API.
    console.log("Booking submitted", { ...values, date: format(values.date, "yyyy-MM-dd") });
    toast.success("Booking request sent!", {
      description: "Our team will confirm your slot shortly.",
    });
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-display tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" /> ONLINE BOOKING <span className="h-px w-10 bg-primary" />
          </div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl">
            <span className="text-gradient-steel">BOOK YOUR</span>{" "}
            <span className="text-gradient-red">MOBILE MECHANIC.</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-muted-foreground">
            Pick a date, time and suburb — we'll roll up to your driveway with the workshop on wheels.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-primary/40 bg-card p-10 text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="font-display text-3xl text-gradient-red">REQUEST RECEIVED</h2>
              <p className="mt-3 text-muted-foreground">
                Thanks — one of our team will call you shortly to confirm your booking.
                For urgent jobs call{" "}
                <a href="tel:0412345678" className="text-primary font-semibold">0412 345 678</a>.
              </p>
              <Button onClick={() => setSubmitted(false)} className="mt-6" variant="outline">
                Make another booking
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-glow/10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact */}
                  <SectionTitle icon={<User className="h-4 w-4" />} title="YOUR DETAILS" />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl><Input placeholder="John Smith" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> Phone</FormLabel>
                          <FormControl><Input type="tel" placeholder="0412 345 678" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> Email</FormLabel>
                        <FormControl><Input type="email" placeholder="you@email.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* When & Where */}
                  <SectionTitle icon={<CalendarIcon className="h-4 w-4" />} title="WHEN & WHERE" />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  type="button"
                                  variant="outline"
                                  className={cn(
                                    "h-9 justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Preferred time</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select time slot" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TIME_SLOTS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="suburb"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Suburb / location</FormLabel>
                        <FormControl><Input placeholder="e.g. Parramatta, NSW 2150" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Vehicle */}
                  <SectionTitle icon={<Car className="h-4 w-4" />} title="VEHICLE DETAILS" />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service required</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-3 gap-5">
                    <FormField
                      control={form.control}
                      name="vehicleMake"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Make</FormLabel>
                          <FormControl><Input placeholder="Toyota" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vehicleModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model</FormLabel>
                          <FormControl><Input placeholder="Hilux" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vehicleYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl><Input inputMode="numeric" placeholder="2019" maxLength={4} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="rego"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rego (optional)</FormLabel>
                        <FormControl><Input placeholder="ABC123" maxLength={10} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <SectionTitle icon={<MessageSquare className="h-4 w-4" />} title="ENQUIRY MESSAGE" />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe the issue or service required <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="e.g. Car won't start in the mornings, need a battery check and full service. Located in driveway."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full sm:w-auto font-display tracking-widest shadow-glow hover:scale-[1.02] transition-transform"
                  >
                    <Send className="h-4 w-4" /> SUBMIT BOOKING REQUEST
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting you agree to be contacted about your booking. For urgent jobs call{" "}
                    <a href="tel:0412345678" className="text-primary">0412 345 678</a>.
                  </p>
                </form>
              </Form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center ring-1 ring-primary/30">
        {icon}
      </div>
      <h3 className="font-display tracking-[0.25em] text-sm text-foreground">{title}</h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
