import { BarChart3, Rocket, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const features = [
  {
    icon: <Rocket size={32} />,
    title: "Smart Scraping",
    desc: "Generate targeted leads from Google, Facebook, and more using AI-powered scraping filters.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Campaign Automation",
    desc: "Create WhatsApp, Email, and SMS campaigns that nurture leads and boost conversion rates.",
  },
  {
    icon: <Users2 size={32} />,
    title: "Team Collaboration",
    desc: "Assign leads, manage sales progress, and track marketing results in one shared workspace.",
  },
];

const Section2 = () => {
  return (
    <section className="bg-shell py-20">
      <div className="mx-auto w-full max-w-6xl  px-4 space-y-10">
        <SectionHeader
          eyebrow="Features"
          title="Powerful Tools for Every Role"
          description="Admin, Sales, and Marketing teams get tailored dashboards and tools that align with their goals."
        />
        <div className="grid my-8 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white/50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center text-[var(--color-clay)] mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-[var(--color-ink)]/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
