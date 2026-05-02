import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/autoxpert-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/book", label: "Book Online" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 py-3 sm:px-10 lg:px-14 xl:px-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AutoXpert Group" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg tracking-wider text-gradient-steel">AUTOXPERT</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">GROUP</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:0412345678"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-display text-sm tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> 0412 345 678
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-6 py-4 sm:px-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-display tracking-wider text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:0412345678" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-display tracking-wider text-primary-foreground">
              <Phone className="h-4 w-4" /> Call 0412 345 678
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
