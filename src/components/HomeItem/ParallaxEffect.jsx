import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Building2, Users, Globe2, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Globe2 className="w-6 h-6 text-[var(--color-sand)]" />,
    value: 20,
    label: "Countries Served",
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6 text-[var(--color-sand)]" />,
    value: 1200,
    label: "Business Clients",
  },
  {
    id: 3,
    icon: <Building2 className="w-6 h-6 text-[var(--color-sand)]" />,
    value: 350,
    label: "Projects Completed",
  },
  {
    id: 4,
    icon: <Award className="w-6 h-6 text-[var(--color-sand)]" />,
    value: 40,
    label: "Industry Awards",
  },
];

const ParallaxEffect = () => {
  return (
    <section
      className="relative h-[80vh] lg:h-[90vh] flex md:items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-forest)]/70"></div>

      {/* Content */}
      <div className="relative top-20 px-4 md:top-0 z-10 text-center max-w-3xl">
        <h1 className="text-3xl font-serif md:text-5xl font-bold mb-4 text-[var(--color-shell)]">
          Empowering Innovation Across Industries
        </h1>
        <p className="text-sm md:text-md text-[var(--color-sand)]">
          From real estate to technology, retail to hospitality — Estate Orbit helps
          businesses design smarter, connect deeper, and grow sustainably.
        </p>
      </div>

      {/* Stats */}
      <div className="absolute bottom-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[var(--color-ink)]/30 p-4 md:p-6 rounded-xl backdrop-blur-md">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="p-3 bg-[var(--color-clay)]/20 rounded-full mb-2">
              {item.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-shell)]">
              <CountUp end={item.value} duration={4} />
              {item.id === 1 && "+"}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-sand)]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxEffect;
