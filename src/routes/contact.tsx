import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AutoXpert Group Mobile Mechanic" },
      { name: "description", content: "Book a mobile mechanic visit or get a quote. Call AutoXpert Group on 0412 345 678 — 24/7 across the metro area." },
      { property: "og:title", content: "Contact AutoXpert Group" },
      { property: "og:description", content: "Get a quote or book your mobile mechanic visit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-display tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" /> GET IN TOUCH <span className="h-px w-10 bg-primary" />
          </div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl">
            <span className="text-gradient-steel">LET'S BOOK</span> <span className="text-gradient-red">YOUR VISIT.</span>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Call us 24/7", value: "0412 345 678", href: "tel:0412345678" },
              { icon: Mail, label: "Email", value: "hello@autoxpertgroup.com.au", href: "mailto:hello@autoxpertgroup.com.au" },
              { icon: MapPin, label: "Service area", value: "All metro suburbs" },
              { icon: Clock, label: "Hours", value: "24/7 mobile · Workshop Mon–Sat" },
            ].map((c) => {
              const Inner = (
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="h-11 w-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center ring-1 ring-primary/30">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-display tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="font-display text-lg text-foreground">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? <a key={c.label} href={c.href}>{Inner}</a> : <div key={c.label}>{Inner}</div>;
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Vehicle (make / model / year)" name="vehicle" />
            <div>
              <label className="text-xs font-display tracking-widest text-muted-foreground">How can we help?</label>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Tell us about the issue or service required..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display tracking-widest text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Send className="h-4 w-4" /> SEND ENQUIRY
            </button>
            {sent && (
              <p className="text-sm text-primary">Thanks — we'll be in touch shortly. For urgent jobs, call 0412 345 678.</p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-display tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
