import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Snowflake,
  Flame,
  Wrench,
  ShieldCheck,
  Star,
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Sparkles,
} from "lucide-react";

const PHONE = "0274 400 007";
const PHONE_TEL = "+64274400007";
const BUSINESS = "Manukau Heat Pumps Ltd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manukau Heat Pumps Ltd | Heat Pump Installation & Service Auckland" },
      {
        name: "description",
        content:
          "Auckland's trusted heat pump specialists. Free quotes, expert installation & servicing of Mitsubishi, Daikin, Fujitsu & Panasonic. Call 0274 400 007.",
      },
      { property: "og:title", content: "Manukau Heat Pumps Ltd — Heat Pump Experts in Auckland" },
      { property: "og:description", content: "Free quotes • Expert install • All major brands. Call 0274 400 007." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: BUSINESS,
          telephone: PHONE,
          areaServed: "Auckland",
          address: { "@type": "PostalAddress", addressLocality: "Manukau", addressRegion: "Auckland", addressCountry: "NZ" },
          openingHours: "Mo-Sa 08:00-19:00",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Process />
      <Brands />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-sm">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open today · Closes 7pm</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Servicing all of Auckland</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 font-semibold hover:text-accent transition">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
            <Snowflake className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="font-display font-bold leading-tight truncate">Manukau Heat Pumps</div>
            <div className="text-xs text-muted-foreground">Auckland's heating & cooling specialists</div>
          </div>
        </a>
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#why" className="hover:text-primary">Why Us</a>
            <a href="#brands" className="hover:text-primary">Brands</a>
            <a href="#reviews" className="hover:text-primary">Reviews</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm hover:brightness-105 transition"
          >
            Free Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 60%, white, transparent 35%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Auckland's 5-star rated heat pump team
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Warmer winters. <br />
            <span className="text-accent">Cooler summers.</span> <br />
            Lower power bills.
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">
            Expert heat pump supply, installation and servicing across Auckland.
            Free no-obligation quotes, tidy installs, and all major brands.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] hover:brightness-105 transition"
            >
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-6 py-3.5 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "500+", v: "Installs" },
              { k: "10+ yrs", v: "Experience" },
              { k: "5★", v: "Google rated" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-accent">{s.k}</div>
                <div className="text-xs text-white/70 uppercase tracking-wide">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:justify-self-end w-full max-w-md">
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

function QuoteCard() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", suburb: "", type: "Residential" });

const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("https://formspree.io/f/xdareqjl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  setSent(true);
};

  return (
    <div id="quote" className="rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-elegant)] p-6 sm:p-7 border border-border">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
        <ShieldCheck className="h-4 w-4" /> Free • No obligation
      </div>
      <h3 className="mt-2 text-2xl font-bold">Get your free quote</h3>
      <p className="text-sm text-muted-foreground">We'll call you back within 1 business hour.</p>

      {sent ? (
        <div className="mt-6 rounded-xl bg-success/10 border border-success/30 p-4 text-sm">
          <div className="flex items-center gap-2 font-semibold text-success">
            <CheckCircle2 className="h-4 w-4" /> Request opened in your email
          </div>
          <p className="mt-1 text-muted-foreground">Or call us directly on {PHONE}.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-5 space-y-3">
          <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
          <Field label="Suburb" value={form.suburb} onChange={(v) => setForm({ ...form, suburb: v })} required />
          <div>
            <label className="text-xs font-semibold text-foreground/70">Property type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>New build</option>
              <option>Replacement</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground px-5 py-3 font-semibold shadow-[var(--shadow-card)] hover:brightness-110 transition"
          >
            Request my free quote <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-[11px] text-muted-foreground text-center">By submitting you agree to be contacted about your enquiry.</p>
        </form>
      )}
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-foreground/70">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {[
          { icon: ShieldCheck, t: "Licensed & insured" },
          { icon: Star, t: "5-star Google reviews" },
          { icon: Wrench, t: "Tidy, expert installs" },
          { icon: CheckCircle2, t: "Manufacturer warranties" },
        ].map(({ icon: Icon, t }) => (
          <div key={t} className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary shrink-0" />
            <span className="font-medium">{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: HomeIcon, title: "Residential Installation", desc: "Whole-home heat pump systems sized and installed for Kiwi homes.", points: ["Free in-home assessment", "Same-week installs", "Tidy cable runs"] },
    { icon: Building2, title: "Commercial Systems", desc: "Offices, retail and hospitality — quiet, efficient comfort.", points: ["Multi-zone solutions", "After-hours installs", "Service contracts"] },
    { icon: Wrench, title: "Servicing & Repairs", desc: "Keep your unit running at peak efficiency, all brands.", points: ["Filter & coil clean", "Refrigerant top-ups", "Fault diagnosis"] },
    { icon: Flame, title: "Ducted & Multi-Split", desc: "Discreet ducted systems and multi-room split setups.", points: ["Bedroom-quiet operation", "Zoned control", "Hidden indoor units"] },
  ];
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="What we do" title="Heat pump services across Auckland" subtitle="From a single bedroom unit to a full ducted system — we make it easy." />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-primary)] opacity-10 blur-2xl" />
          <div className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full aspect-square bg-card border border-border p-8 grid place-items-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Snowflake, label: "Cooling" },
                { icon: Flame, label: "Heating" },
                { icon: Wrench, label: "Service" },
                { icon: ShieldCheck, label: "Warranty" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl bg-primary/10 p-6 flex flex-col items-center gap-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-xs font-semibold text-primary/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionHeader align="left" eyebrow="Why Manukau Heat Pumps" title="Honest advice. Tidy installs. Real warranties." />
          <div className="mt-8 space-y-5">
            {[
              { t: "Free, no-pressure quotes", d: "We size the system to your home — not to our sales target." },
              { t: "Qualified, insured installers", d: "Every install is done in-house by our own team. No contractors." },
              { t: "All major brands stocked", d: "Mitsubishi Electric, Daikin, Fujitsu and Panasonic — best price." },
              { t: "Aftercare you can call", d: "Easy servicing plans and quick response if anything goes wrong." },
            ].map((b) => (
              <div key={b.t} className="flex gap-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{b.t}</h4>
                  <p className="text-muted-foreground text-sm">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow transition">
            Book your free assessment <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Free quote", d: "Call or fill the form — we'll visit and recommend the right system." },
    { n: "02", t: "Tidy install", d: "Our team installs in one day with respect for your home." },
    { n: "03", t: "Enjoy & service", d: "Comfort year-round, with easy ongoing servicing." },
  ];
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="How it works" title="From enquiry to comfort in days" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7">
              <div className="text-5xl font-display font-bold text-primary/20">{s.n}</div>
              <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
              <p className="text-muted-foreground mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = ["Mitsubishi Electric", "Daikin", "Fujitsu", "Panasonic", "Toshiba", "LG"];
  return (
    <section id="brands" className="py-14 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Authorised installers of</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((b) => (
            <div key={b} className="rounded-xl border border-border bg-background py-5 text-center font-display font-semibold text-foreground/70">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { n: "Sarah M.", s: "Papakura", t: "Quoted Tuesday, installed Friday. Tidy job and the team explained everything. Highly recommend." },
    { n: "James K.", s: "Manurewa", t: "Best price out of three quotes and they didn't try to upsell. The Mitsubishi unit is whisper quiet." },
    { n: "Priya R.", s: "Botany", t: "Our power bill dropped noticeably in winter. Wish we'd done it years ago." },
  ];
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="What customers say" title="Trusted across South & East Auckland" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.t}"</p>
              <div className="mt-5 text-sm font-semibold">{r.n} <span className="text-muted-foreground font-normal">· {r.s}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = ["Manukau", "Papakura", "Manurewa", "Botany", "Howick", "Pakuranga", "Otahuhu", "Mangere", "Papatoetoe", "Flat Bush", "Clevedon", "Takanini"];
  return (
    <section className="py-16 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Areas we serve" title="Proudly local to Manukau & wider Auckland" />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "How much does a heat pump cost installed?", a: "A standard high-wall split for a bedroom or small living area typically lands between $2,200–$3,500 fully installed. Larger living rooms or ducted systems vary — we'll give you an exact fixed quote after a free visit." },
    { q: "How long does an install take?", a: "Most single-room installations are completed in a few hours. Multi-split or ducted systems usually take 1–2 days." },
    { q: "Which brand should I choose?", a: "It depends on your room size, budget and noise preferences. We'll recommend the best fit — we sell Mitsubishi Electric, Daikin, Fujitsu and Panasonic." },
    { q: "Do you service heat pumps you didn't install?", a: "Yes — we service all major brands across Auckland." },
    { q: "Do you offer warranties?", a: "All units come with the manufacturer's warranty (typically 5–6 years) plus our own installation workmanship guarantee." },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {qs.map((item, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                {item.q}
                <span className="text-primary transition group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-24 text-center text-primary-foreground">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready for a warmer, smarter home?</h2>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto">Get a free quote today. We'll respond within one business hour.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] hover:brightness-105 transition">
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
          <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 py-4 font-semibold backdrop-blur hover:bg-white/20 transition">
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><Snowflake className="h-5 w-5" /></div>
            <div className="font-display font-bold text-lg">Manukau Heat Pumps Ltd</div>
          </div>
          <p className="mt-4 text-white/75 text-sm max-w-sm">Auckland's trusted heat pump specialists — installation, servicing and repairs.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">{PHONE}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@manukauheatpumps.co.nz</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Manukau, Auckland</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat · 8am–7pm</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#why" className="hover:text-accent">Why choose us</a></li>
            <li><a href="#reviews" className="hover:text-accent">Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            <li><a href="#quote" className="hover:text-accent">Free quote</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Manukau Heat Pumps Ltd. All rights reserved.</span>
          <span>Proudly serving Auckland.</span>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur p-3 grid grid-cols-2 gap-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)]">
      <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
        <Phone className="h-4 w-4" /> Call now
      </a>
      <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
        Free quote
      </a>
    </div>
  );
}

function SectionHeader({
  eyebrow, title, subtitle, align = "center",
}: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
