import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/autoxpert-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="AutoXpert Group" className="h-16 w-16" width={64} height={64} loading="lazy" />
          <p className="mt-4 text-sm text-muted-foreground">
            Workshop precision. Mobile convenience. We come to you — anywhere, anytime.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 0412 345 678</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>hello@autoxpertgroup.com.au</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> Servicing all metro suburbs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-foreground">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">24/7 Mobile Mechanic — We come to you.</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AutoXpert Group. All rights reserved.
      </div>
    </footer>
  );
}
