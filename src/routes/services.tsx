import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceCard } from "@/components/site/ServiceCard";
import { servicesCatalog } from "@/data/services-catalog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AutoXpert Group Mobile Mechanic" },
      {
        name: "description",
        content:
          "Mobile servicing, EV & hybrid, repairs, fleet, workshop, inspections, diesel & 4WD, caravan & trailer, diagnostics, batteries and brakes — at your home, office, or our workshop.",
      },
      { property: "og:title", content: "Services — AutoXpert Group" },
      { property: "og:description", content: "Full-spectrum auto care, delivered to you." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-display tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" /> SERVICES <span className="h-px w-10 bg-primary" />
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              <span className="text-gradient-steel">EVERYTHING YOUR</span>
              <br />
              <span className="text-gradient-red">VEHICLE NEEDS.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              The same comprehensive service mix trusted by leading mobile operations —{" "}
              <a
                className="text-foreground/90 underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
                href="https://mobileautocare.com.au/"
                target="_blank"
                rel="noreferrer"
              >
                structured from Mobile AutoCare
              </a>{" "}
              categories — delivered under AutoXpert Group standards, at your location or in our
              workshop.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCatalog.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
