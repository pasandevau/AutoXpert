import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Car,
  Caravan,
  ClipboardCheck,
  Cog,
  Cpu,
  Disc,
  Factory,
  Gauge,
  Truck,
  Van,
  Wrench,
  Zap,
} from "lucide-react";

/** Full service lines aligned with Mobile AutoCare (mobileautocare.com.au) + AutoXpert extras */
export type CatalogService = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const servicesCatalog: CatalogService[] = [
  {
    icon: Car,
    title: "Mobile car servicing",
    desc: "Minor & general servicing, tune-ups, handbook / logbook servicing, air conditioning and transmission — at your home or workplace.",
  },
  {
    icon: Zap,
    title: "EV & hybrid servicing",
    desc: "Servicing and repairs for electric and hybrid vehicles — high-voltage aware, manufacturer-aligned care.",
  },
  {
    icon: Wrench,
    title: "Mobile car repairs",
    desc: "Brakes, clutches, timing belts and chains, water pumps, air conditioning and on-site repairs when the job suits the driveway.",
  },
  {
    icon: Cog,
    title: "Engine performance & rebuilds",
    desc: "Complex engine diagnosis and repair on-site where practical; major rebuilds and machining handled in our workshop with full handover notes.",
  },
  {
    icon: Truck,
    title: "Mobile fleet maintenance",
    desc: "Reduce vehicle downtime and improve productivity — scheduled programs, on-site fleet days and clear reporting.",
  },
  {
    icon: Factory,
    title: "Workshop",
    desc: "For larger repairs that are not practical on-site — same team, same standards, fully equipped fixed workshop when you need it.",
  },
  {
    icon: ClipboardCheck,
    title: "Vehicle inspections",
    desc: "Pre-purchase inspections, end-of-warranty and end-of-lease reports, and pre-sale vendor inspections with full written findings.",
  },
  {
    icon: Gauge,
    title: "Diesel & 4WD",
    desc: "Diesel and 4WD handbook servicing, specialist maintenance and repairs for four-wheel-drive and light-commercial vehicles.",
  },
  {
    icon: Caravan,
    title: "Mobile caravan maintenance",
    desc: "Mechanical and 12V electrical inspection, repair and servicing for caravans — we come to your storage or site where possible.",
  },
  {
    icon: Van,
    title: "Mobile trailer maintenance",
    desc: "Mechanical and electrical inspection, repairs and servicing for trailers — couplings, brakes, bearings and roadworthiness.",
  },
  {
    icon: Cpu,
    title: "Diagnostics",
    desc: "Computerised fault scanning, live data and pinpoint troubleshooting for warning lights and intermittent faults on all makes.",
  },
  {
    icon: BatteryCharging,
    title: "Batteries & charging",
    desc: "Test, replace and recycle batteries; alternator and charging system diagnosis — back on the road with minimal downtime.",
  },
  {
    icon: Disc,
    title: "Brakes, suspension & steering",
    desc: "Pads, rotors, calipers, fluid flushes, shocks, struts and steering components — full system overhauls when required.",
  },
];

/** “Save time / save money” value props — inspired by reference site structure, AutoXpert-branded (no third-party pricing). */
export const saveTimeBullets = [
  "Qualified mobile mechanics across the metro area",
  "Bookings often available within 24 hours",
  "Most servicing and repairs completed in 1–2 hours on-site",
  "Quotes provided before any work commences",
  "Workmanship guaranteed by qualified technicians",
  "Decades of combined industry experience on every job",
];

export const saveMoneyBullets = [
  "No call-out fees for mobile bookings within metro suburbs (where advertised)",
  "Honest recommendations — all repairs approved by you before we proceed",
  "Mobile service pricing in line with our workshop rates — no “mobile premium”",
  "Transparent itemised quotes — no surprise add-ons",
  "Pay by EFTPOS, card or company account (where available)",
];

export const marqueeServiceLabels = [
  "MOBILE CAR SERVICING",
  "EV & HYBRID",
  "MOBILE REPAIRS",
  "FLEET CARE",
  "WORKSHOP",
  "INSPECTIONS",
  "DIESEL & 4WD",
  "CARAVAN & TRAILER",
  "DIAGNOSTICS",
  "BATTERIES",
  "WE COME TO YOU",
];
