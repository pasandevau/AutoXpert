import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/90 p-6 shadow-elevated ring-1 ring-white/[0.04] backdrop-blur-sm transition-shadow duration-500 hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_oklch(0_0_0/0.65)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
      <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-all duration-500 group-hover:w-full" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/[0.12] text-primary ring-1 ring-primary/25">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-lg sm:text-xl tracking-wide text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
