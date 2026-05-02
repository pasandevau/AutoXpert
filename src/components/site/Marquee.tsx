export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/90 bg-gradient-to-r from-background via-card/20 to-background py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-14 pr-14 opacity-95">
        {loop.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center gap-14">
            <span className="whitespace-nowrap font-display text-xl tracking-[0.22em] text-gradient-steel sm:text-2xl">
              {t}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-primary shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_70%,transparent)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
