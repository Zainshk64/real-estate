import React from "react";
import SectionHeader from "../SectionHeader";
import { Check, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
const Comparison = () => {
  return (
    <section className="bg-shell px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Property Sales"
          title="Sell Your House on Estate Orbit and Get the Best Price"
          description="With Estate Orbit, selling your home is simple and rewarding. List in just a few clicks, connect with serious buyers."
        />
        <div>
          <div className=" grid  md:grid-cols-3 place-items-center p-3 lg:p-6 border border-neutral-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex flex-col"
            >
              <h1 className="font-serif text-center md:text-left text-2xl leading-tight my-2">
                Sell it Myself!
              </h1>

              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check />
                <p>List your property in 2 minutes</p>
              </div>
              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check />
                <p>20 million + active users</p>
              </div>
              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check />
                <p>Connect directly with buyers & renters</p>
              </div>
              <button className="tems-center gap-2 rounded-pill bg-forest py-2 mt-4 text-sm text-shell shadow-collage transition hover:bg-clay">
                Post Your AD
              </button>
            </motion.div>
            <div className="flex items-center py-5 space-y-3  flex-col">
              <span className="h-0.5 md:h-14 w-24 md:w-0.5 border bg-forest"></span>
              <span>OR</span>
              <span className="h-0.5 md:h-14 w-24 md:w-0.5 border bg-clay"></span>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex flex-col">
              <h1 className="font-serif text-clay text-2xl text-center md:text-left leading-tight my-2">
                Sell it For Me!
              </h1>

              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check className="text-clay" />
                <p>Sell your property without hassle</p>
              </div>
              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check className="text-clay" />
                <p>Free property evaluation & featured ad</p>
              </div>
              <div className="text-sm text-ink/70 inline-flex gap-2 items-center">
                <Check className="text-clay" />
                <p>Maximize your deal with expert agents</p>
              </div>
              <button className="gap-2 rounded-pill bg-clay py-2 mt-4 text-sm text-shell shadow-collage transition hover:bg-forest">
                Help Me sell my House
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
