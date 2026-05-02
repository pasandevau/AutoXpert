import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Clock, CheckCircle2, Star, PiggyBank, Timer } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Marquee } from "@/components/site/Marquee";
import logo from "@/assets/autoxpert-logo.png";
import ute from "@/assets/autoxpert-ute.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  marqueeServiceLabels,
  saveMoneyBullets,
  saveTimeBullets,
  servicesCatalog,
} from "@/data/services-catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoXpert Group — 24/7 Mobile Mechanic & Auto Care" },
      {
        name: "description",
        content: "Premium mobile mechanic — 24/7 across the metro area.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* HERO — headline + CTAs in left column; logo sized for laptop viewports; stats in own strip + safe bottom padding */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" width={1920} height={1088} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pt-16 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:px-10 sm:pt-20 sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] lg:px-14 lg:pt-24 lg:pb-[calc(7rem+env(safe-area-inset-bottom,0px))] xl:px-20">
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 xl:gap-x-10">
            <div className="min-w-0 lg:col-span-6 xl:col-span-7">
              <div className="border-l border-white/[0.08] pl-5 sm:pl-7 lg:max-w-[40rem] lg:pl-9 xl:pl-10">
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-display tracking-[0.25em] text-primary sm:px-5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      24/7 MOBILE MECHANIC
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="font-display text-4xl leading-[1.06] tracking-[0.01em] sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:leading-[1.06] xl:text-7xl xl:leading-[1.05] 2xl:text-8xl 2xl:leading-[1.04]"
                  >
                    <span className="text-gradient-steel">WORKSHOP</span>
                    <br />
                    <span className="text-gradient-steel">PRECISION.</span>
                    <br />
                    <span className="text-gradient-red">MOBILE</span> <span className="text-gradient-red">CONVENIENCE.</span>
                  </motion.h1>

                  <div className="flex max-w-xl flex-col gap-3 sm:gap-4">
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="premium-editorial text-[11px] font-medium uppercase leading-relaxed tracking-[0.28em] text-muted-foreground/90 sm:text-[12px] sm:tracking-[0.3em]"
                    >
                      Servicing all metro suburbs · Same-day response where available
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.26 }}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.75]"
                    >
                      AutoXpert Group brings master-level auto care to your driveway. Servicing,
                      repairs, diagnostics and more — at home, at work, or in our fully equipped workshop.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.32 }}
                    className="flex flex-wrap items-center gap-3 sm:gap-4"
                  >
                    <a
                      href="tel:0412345678"
                      className="group inline-flex items-center gap-2.5 rounded-md bg-primary px-5 py-3.5 font-display text-sm tracking-[0.16em] text-primary-foreground shadow-glow transition-[filter,box-shadow] hover:brightness-110 sm:gap-3 sm:px-7 sm:py-4 sm:text-base sm:tracking-[0.18em]"
                    >
                      <Phone className="h-5 w-5 shrink-0" />
                      CALL 0412 345 678
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-3.5 font-display text-sm tracking-[0.16em] text-foreground backdrop-blur transition-colors hover:bg-secondary/60 sm:px-7 sm:py-4 sm:text-base sm:tracking-[0.18em]"
                    >
                      EXPLORE SERVICES
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 justify-center lg:col-span-6 xl:col-span-5 lg:justify-end lg:self-center lg:pl-4 xl:pl-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative w-full max-w-[min(100%,280px)] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]"
              >
                <div className="absolute -inset-4 rounded-3xl bg-primary/25 blur-3xl sm:-inset-6 lg:-inset-6" />
                <img
                  src={logo}
                  alt="AutoXpert Group logo"
                  className="relative mx-auto h-[200px] w-[200px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] xl:h-[360px] xl:w-[360px]"
                  width={400}
                  height={400}
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="premium-stat-rail mt-10 border-t border-white/[0.08] pt-7 sm:mt-11 sm:pt-8 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:pt-9 xl:gap-x-10"
          >
            <div className="lg:col-span-7 xl:col-span-7 lg:border-l lg:border-white/[0.08] lg:pl-9 xl:pl-10">
              <div className="grid max-w-xl grid-cols-3 gap-4 sm:max-w-2xl sm:gap-8 lg:max-w-none lg:gap-10">
                {["24/7", "30+", "0$"].map((k, i) => (
                  <div key={k} className="min-w-0 text-left">
                    <div className="font-display text-2xl text-gradient-red sm:text-3xl lg:text-4xl">{k}</div>
                    <div className="mt-1.5 text-[10px] font-medium uppercase leading-snug tracking-wider text-muted-foreground sm:mt-2 sm:text-xs sm:tracking-widest">
                      {["Availability", "Years experience", "Call-out fee"][i]}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 max-w-lg text-[10px] leading-relaxed text-muted-foreground/80 sm:mt-5 sm:text-[11px] lg:max-w-2xl">
                *Call-out terms as quoted for your suburb — transparent pricing before any work begins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Marquee items={marqueeServiceLabels} />
      <HomeRest />
      <Footer />
    </div>
  );
}

function HomeRest() {
  return (
    <>
      <section className="relative border-y border-border/80 bg-card/35 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-display tracking-[0.35em] text-primary">WHY DRIVERS CHOOSE US</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-gradient-steel">SAVE TIME.</span> <span className="text-gradient-red">SAVE MONEY.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-bento-panel rounded-2xl border border-border/80 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-primary">
                <Timer className="h-6 w-6" />
                <h3 className="font-display text-2xl text-foreground">SAVE TIME</h3>
              </div>
              <ul className="mt-8 space-y-4">
                {saveTimeBullets.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="premium-bento-panel rounded-2xl border border-border/80 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-primary">
                <PiggyBank className="h-6 w-6" />
                <h3 className="font-display text-2xl text-foreground">SAVE MONEY</h3>
              </div>
              <ul className="mt-8 space-y-4">
                {saveMoneyBullets.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs font-display tracking-[0.3em] text-primary">OUR CORE SERVICE</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-gradient-steel">THE WORKSHOP</span>
              <br />
              <span className="text-gradient-red">THAT COMES TO YOU.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">Fully equipped mobile utes — dealership-grade tooling at your door.</p>
            <div className="mt-8 flex gap-4">
              <a href="tel:0412345678" className="rounded-md bg-primary px-5 py-3 font-display tracking-wider text-primary-foreground">
                BOOK NOW
              </a>
              <Link to="/contact" className="rounded-md border border-border px-5 py-3 font-display tracking-wider">
                GET A QUOTE
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={ute} alt="AutoXpert ute" className="w-full" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl border border-primary/40 bg-card px-4 py-3 sm:left-6">
              <Clock className="h-5 w-5 text-primary" />
              <div className="font-display text-sm">ETA 60 MIN</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-y border-border bg-card/25 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-display text-4xl">
            <span className="text-gradient-steel">FULL SPECTRUM</span> <span className="text-gradient-red">AUTO CARE</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCatalog.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-display text-4xl">
            <span className="text-gradient-steel">FROM CALL TO</span> <span className="text-gradient-red">KEY-IN-HAND</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Call or book", d: "Quote and lock a time." },
              { n: "02", t: "We come to you", d: "Service ute on-site." },
              { n: "03", t: "Drive away", d: "Quality work, transparent pricing." },
            ].map((step, i) => (
              <motion.div key={step.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-8">
                <div className="font-display text-3xl text-gradient-red">{step.n}</div>
                <h3 className="mt-4 font-display text-xl">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-display text-4xl">
            <span className="text-gradient-steel">TRUSTED BY</span> <span className="text-gradient-red">DRIVERS</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Sarah K.", t: "On time, brakes in the carpark." },
              { n: "Marcus L.", t: "Honest quote, quality parts." },
              { n: "Priya R.", t: "Battery rescue in 40 minutes." },
            ].map((r, i) => (
              <div key={r.n} className="rounded-xl border border-border bg-card p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={`${r.n}-${j}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm">&ldquo;{r.t}&rdquo;</p>
                <p className="mt-4 text-xs text-muted-foreground">— {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-5xl sm:text-6xl">
            <span className="text-gradient-steel">READY WHEN</span>
            <br />
            <span className="text-gradient-red">YOU ARE.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:0412345678" className="rounded-md bg-primary px-7 py-4 font-display tracking-widest text-primary-foreground shadow-glow">
              CALL 0412 345 678
            </a>
            <Link to="/contact" className="rounded-md border border-border bg-secondary/40 px-7 py-4 font-display tracking-widest">
              REQUEST A VISIT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
