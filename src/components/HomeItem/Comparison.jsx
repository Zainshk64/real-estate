import React from "react";
import SectionHeader from "../SectionHeader";
import { Check, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
const Comparison = () => {
  return (
  <section className="bg-shell px-4 py-20">
  <div className="mx-auto w-full max-w-6xl space-y-10">
    <SectionHeader
      eyebrow="Sales & Marketing"
      title="Empower Your Team or Let Our Experts Handle It"
      description="Whether you prefer managing campaigns yourself or letting professionals optimize your funnel, our platform gives you both options to scale your growth effortlessly."
    />

    <div>
      <div className="grid md:grid-cols-3 place-items-center p-3 lg:p-6 border border-neutral-300">
        {/* Left Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h1 className="font-serif text-center md:text-left text-2xl leading-tight my-2">
            Do It Myself!
          </h1>

          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check />
            <p>Launch and track campaigns instantly</p>
          </div>
          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check />
            <p>Access 200K+ verified business leads</p>
          </div>
          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check />
            <p>Manage outreach and follow-ups in one place</p>
          </div>
          <button className="tems-center gap-2 rounded-pill bg-forest py-2 mt-4 text-sm text-shell shadow-collage transition hover:bg-clay">
            Start My Campaign
          </button>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center py-5 space-y-3 flex-col">
          <span className="h-0.5 md:h-14 w-24 md:w-1 border bg-forest"></span>
          <span>OR</span>
          <span className="h-0.5 md:h-14 w-24 md:w-1 border bg-clay"></span>
        </div>

        {/* Right Option */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h1 className="font-serif text-clay text-2xl text-center md:text-left leading-tight my-2">
            Let Experts Run It!
          </h1>

          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check className="text-clay" />
            <p>Full-service automation setup & optimization</p>
          </div>
          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check className="text-clay" />
            <p>Personalized strategy for your business niche</p>
          </div>
          <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
            <Check className="text-clay" />
            <p>Dedicated account manager for ongoing support</p>
          </div>
          <button className="gap-2 rounded-pill bg-clay py-2 mt-4 text-sm text-shell shadow-collage transition hover:bg-forest">
            Request Managed Service
          </button>
        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Comparison;
