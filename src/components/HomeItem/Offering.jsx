import React from "react";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
const Offering = () => {
  const offerList = [
    {
      title: "Smart Property Listings",
      para: "Instantly showcase your property with photos, descriptions, and AI-driven visibility to the right buyers.",
      src: "/smartproperty.png",
    },
    {
      title: "Direct Buyer Connections",
      para: "Skip the middleman connect directly with verified buyers and negotiate on your terms",
      src: "/directproperty.png",
    },
    {
      title: "Expert Agent Assistance",
      para: "Prefer professional help? Our vetted agents handle everything from pricing strategy to closing.",
      src: "/agentproperty.png",
    },
    {
      title: "Secure & transparent Process",
      para: "Track offers, inspections, and negotiations in real time with complete transparency.",
      src: "/secureproperty.png",
    },
  ];
  return (
    <section className="bg-shell px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Estate Orbit Offering"
          title="Everything you need to buy, sell, and invest with confidence."
          description="At Estate Orbit, we combine technology with trusted expertise to make real estate effortless. From seamless listings to personalized support."
        />
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            {offerList.map((item, index) => (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <div className="flex md:flow-row gap-5 items-start lg:items-center ">
                  <div className="p-4 bg-sand rounded-pill" >
                    <img src={item.src} className="" width={70} alt="" />
                  </div>
                  <div>
                    <h1 className="font-serif mb-2  text-forest text-xl leading-tight" >{item.title}</h1>
                    <p className="text-sm" >{item.para}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offering;
