import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Home, Users, Building2, Trophy } from "lucide-react"; // icons

const stats = [
  { id: 1, icon: <Home className="w-6 h-6 text-" />, value: 600, label: "Properties Sold" },
  { id: 2, icon: <Users className="w-6 h-6 text-primary" />, value: 400, label: "Satisfied Clients" },
  { id: 3, icon: <Building2 className="w-6 h-6 text-primary" />, value: 150, label: "Luxury Projects" },
  { id: 4, icon: <Trophy className="w-6 h-6 text-primary" />, value: 25, label: "Awards Won" },
];

const ParallaxEffect = () => {
  return (
    <section
      className="relative  h-[80vh] lg:h-[90vh] flex  md:items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://luminor-eight.vercel.app/images/section/features-properties-1.jpg')",
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative  top-20 px-4  md:top-0 z-10 text-center max-w-3xl">
        <h1 className="text-3xl font-serif md:text-5xl font-bold mb-4">
          Discover Your Dream Home
        </h1>
        <p className="text-sm md:text-md text-gray-200">
          With Estate Orbit, explore properties tailored to your lifestyle and budget.
        </p>
      </div>

      {/* Stats Bottom Right */}
      <div className="absolute bottom-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/30 p-4 md:p-6 rounded-xl backdrop-blur-md">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="p-3 bg- rounded-full mb-2">{item.icon}</div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <CountUp end={item.value} duration={4} />
            </h2>
            <p className="text-sm md:text-base text-gray-200">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxEffect;
