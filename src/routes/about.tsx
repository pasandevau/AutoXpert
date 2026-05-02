import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Wrench, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ute from "@/assets/autoxpert-ute.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AutoXpert Group" },
      { name: "description", content: "AutoXpert Group blends workshop precision with mobile convenience. Qualified mechanics, transparent pricing, and over 30 years of industry experience." },
      { property: "og:title", content: "About AutoXpert Group" },
      { property: "og:description", content: "Workshop precision. Mobile convenience." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-display tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" /> ABOUT US
            </div>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-[0.95]">
              <span className="text-gradient-steel">BUILT BY</span>{" "}
              <span className="text-gradient-red">MECHANICS</span>{" "}
              <span className="text-gradient-steel">FOR DRIVERS.</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              AutoXpert Group was founded on a simple idea: the best mechanic shouldn't
              be the hardest one to reach. Our qualified team brings decades of dealership
              and workshop expertise directly to your driveway — paired with a fully
              equipped workshop for the heavy jobs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every job is quoted upfront, every repair is approved by you, and every
              service is backed by our workmanship guarantee. No call-out fees. No
              shortcuts. Just expert auto care, when and where you need it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <img src={ute} alt="AutoXpert Group fleet" className="w-full" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, k: "30+", v: "Years experience" },
            { icon: Users, k: "10K+", v: "Happy customers" },
            { icon: Wrench, k: "All Makes", v: "& models serviced" },
            { icon: ShieldCheck, k: "100%", v: "Workmanship guarantee" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <s.icon className="mx-auto h-8 w-8 text-primary" />
              <div className="mt-3 font-display text-3xl text-gradient-red">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
