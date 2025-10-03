"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Building2, Home } from "lucide-react";

const heroCards = [
  {
    id: 1,
    title: "Lagoon Residences",
    location: "PORTO, PORTUGAL",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    offset: "md:-rotate-2 md:-translate-y-4",
  },
  {
    id: 2,
    title: "Copperwood Lofts",
    location: "AUSTIN, USA",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    offset: "md:rotate-3 md:translate-y-8",
  },
  {
    id: 3,
    title: "Aurora Skytop",
    location: "DUBAI, UAE",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80",
    offset: "md:-rotate-1 md:translate-y-12",
  },
];

function HomeShowcase() {
  return (
    <section className="relative overflow-hidden bg-shell">
      <div className="mx-auto  max-w-6xl flex-col gap-10 px-4 pb-24 pt-16 md:flex-row md:items-end md:gap-16 lg:pt-24">
        <motion.div
          className="space-y-6 md:flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-pill bg-sand/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-forest">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            LIVE WHERE YOU THRIVE
          </span>
          <h1 className="font-serif text-balance text-4xl leading-tight md:text-5xl lg:text-[56px]">
            Discover designer-crafted homes on a marketplace built for bold
            property journeys.
          </h1>
          <p className="text-pretty text-base text-ink/75 md:text-lg">
            Estate Orbit mirrors the intelligence of home marketplaces.
           Filter by lifestyle,
            consult experts, and tour immersive stories from trusted developers
            worldwide.
          </p>
          <SearchForm />
          <div className="flex flex-wrap items-center gap-6 text-sm text-ink/70">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Home className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink">18k+ curated homes</p>
                <p>Every listing verified in 24h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-shell">
                4.9
              </span>
              <div>
                <p className="font-semibold text-ink">Resident delight score</p>
                <p>Based on 3,800+ reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="px-4 lg:px-14 py-20">
        <div className="" />
        <div className="grid  md:grid-cols-3 w-full  gap-6">
          {heroCards.map((card, index) => (
            <motion.article
              key={card.id}
              className={`relative overflow-hidden rounded-[28px] shadow-collage`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25 + index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                className="h-60 w-full object-cover"
                loading="lazy"
              />
              <div
                className="card-overlay absolute inset-0"
                aria-hidden="true"
              />
              <div className="relative flex h-60 flex-col justify-between p-6 text-shell">
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.35em]">{card.location}</p>
                  <h3 className="text-2xl font-serif leading-tight">
                    {card.title}
                  </h3>
                </div>
                <button className="inline-flex w-fit items-center gap-2 rounded-pill bg-shell/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-forest transition hover:bg-shell">
                  Explore residence
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
     
    </section>
  );
}

function SearchForm() {
  return (
    <motion.form
      className="w-full rounded-[32px] border border-forest/15 bg-white/60 p-4 shadow-collage backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <label className="flex flex-1 items-center gap-3 rounded-[24px] bg-shell/60 px-4 py-3 text-sm transition hover:bg-shell">
          <MapPin className="h-4 w-4 text-forest" aria-hidden="true" />
          <span className="sr-only">Preferred city</span>
          <input
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink/50 focus:outline-none"
            type="text"
            placeholder="Preferred city or neighborhood"
            name="location"
          />
        </label>
        <div className="flex flex-1 items-center overflow-hidden rounded-[24px] bg-shell/60">
          <span className="flex min-w-[120px] items-center justify-center border-r border-forest/10 px-3 text-xs uppercase tracking-[0.3em] text-forest/70">
            Property
          </span>
          <select
            name="propertyType"
            className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
            defaultValue="luxury"
          >
            <option value="luxury">Luxury Residences</option>
            <option value="villa">Beach Villas</option>
            <option value="urban">Urban Lofts</option>
            <option value="mountain">Mountain Retreats</option>
          </select>
        </div>
        <div className="flex flex-1 items-center overflow-hidden rounded-[24px] bg-shell/60">
          <span className="flex min-w-[120px] items-center justify-center border-r border-forest/10 px-3 text-xs uppercase tracking-[0.3em] text-forest/70">
            Budget
          </span>
          <select
            name="budget"
            className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
            defaultValue="1m-3m"
          >
            <option value="500k-1m">$500k - $1M</option>
            <option value="1m-3m">$1M - $3M</option>
            <option value="3m-5m">$3M - $5M</option>
            <option value="5m+">$5M+</option>
          </select>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center rounded-[24px] bg-forest px-5 py-3 text-sm font-medium text-shell transition hover:bg-ink"
        >
          <Search className="mr-2 h-4 w-4" aria-hidden="true" />
          Search listings
        </button>
      </div>
    </motion.form>
  );
}

export default HomeShowcase;
