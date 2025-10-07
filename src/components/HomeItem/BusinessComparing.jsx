import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const BusinessComparison = () => {
  const businesses = [
    {
      name: "Real Estate Agency",
      image:
        "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "List and manage properties with AI-based visibility tools",
        "Connect directly with verified buyers & tenants",
        "Automated pricing suggestions and lead tracking",
        "3D tours and media uploads for immersive showcasing",
        "Dashboard for performance insights and inquiries",
        "Secure deal management and communication tools",
        "Multi-agent collaboration and client CRM system",
        "Smart filters for property discovery",
        "Instant ad promotion & analytics",
        "Supports local and international listings",
      ],
    },
    {
      name: "IT & Marketing Agency",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Showcase portfolio and success stories with visuals",
        "Manage client projects, proposals, and reviews",
        "Generate leads via industry-optimized pages",
        "In-app chat with potential business partners",
        "Automated campaign tracking and performance stats",
        "Post digital services and set flexible pricing models",
        "Integrate social links and testimonials dynamically",
        "Promote services with SEO-ready listings",
        "Collaborate with other vendors securely",
        "Grow visibility through featured marketplace spots",
      ],
    },
  ];

  return (
    <section className="bg-shell  py-20">
      <div className="mx-auto w-full px-4 max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Industry Use Cases"
          title="How Different Businesses Thrive on Estate Orbit"
          description="From real estate agencies to IT firms and marketing experts discover how Estate Orbit empowers diverse industries with tailored digital solutions."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {businesses.map((biz, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="bg-white group rounded-2xl shadow-collage overflow-hidden flex flex-col"
            >
              <img
                src={biz.image}
                alt={biz.name}
                className="w-full h-64 group-hover:scale-105 transition-all duration-500 blur-none lg:blur-xs group-hover:blur-none object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-serif text-forest">{biz.name}</h2>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  {biz.features.map((feature, idx) => (
                    <li key={idx} className="text-ink">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessComparison;
