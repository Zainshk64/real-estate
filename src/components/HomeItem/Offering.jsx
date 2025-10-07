import React from "react";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
import {
  Building2,
  Users2,
  ShieldCheck,
  BarChart3,
  Workflow,
  Store,
  Globe,
  Handshake,
} from "lucide-react";

const Offering = () => {
  const offerList = [
    {
      title: "Smart Business Listings",
      para: "Showcase your services, products, or properties with AI-optimized listings that reach the right audience instantly.",
      icon: <Building2 className="text-forest" size={36} />,
    },
    {
      title: "Direct Client Connections",
      para: "Connect directly with verified clients or customers—no middlemen, no unnecessary delays.",
      icon: <Users2 className="text-clay" size={36} />,
    },
    {
      title: "Data-Driven Insights",
      para: "Use smart analytics to track engagement, conversions, and audience trends across industries.",
      icon: <BarChart3 className="text-forest" size={36} />,
    },
    {
      title: "Secure & Transparent Operations",
      para: "Experience safe transactions, verified users, and real-time activity tracking to ensure full transparency.",
      icon: <ShieldCheck className="text-clay" size={36} />,
    },
    {
      title: "Integrated Digital Tools",
      para: "From property management to restaurant reservations and online store setup — manage it all in one dashboard.",
      icon: <Workflow className="text-forest" size={36} />,
    },
    {
      title: "Global Business Visibility",
      para: "Expand your brand reach with SEO-ready profiles and social integrations tailored for your niche.",
      icon: <Globe className="text-clay" size={36} />,
    },
    {
      title: "Partner & Collaboration Network",
      para: "Join a growing ecosystem of agencies, agents, and businesses to build partnerships that drive growth.",
      icon: <Handshake className="text-forest" size={36} />,
    },
    {
      title: "Omnichannel Presence",
      para: "Whether you run a restaurant, IT firm, or real estate agency — your profile adapts to your business type automatically.",
      icon: <Store className="text-clay" size={36} />,
    },
  ];

  return (
    <section className="bg-shell  py-20">
      <div className="mx-auto w-full px-4 max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="What Estate Orbit Offers"
          title="Empowering Businesses Across Industries"
          description="From real estate agencies to IT companies and restaurants Estate Orbit connects technology, visibility, and customer engagement under one unified platform."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {offerList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <div className="flex gap-5 items-start lg:items-center bg-white/50 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="p-3 bg-sand rounded-full">{item.icon}</div>
                <div>
                  <h1 className="font-serif mb-2 text-forest text-xl leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-sm text-ink/80">{item.para}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;
