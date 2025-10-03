import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const HouseComparing = () => {
  const houses = [
    {
      name: "Oceanview Villa",
      image:
        // "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
        "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg",
      features: [
        "8 Bedrooms with sea-facing balconies",
        "10 Modern Bathrooms with jacuzzis",
        "Smart kitchen with Italian fittings",
        "5 Luxury floors + rooftop infinity pool",
        "Glass-roof dining hall",
        "Private theater & gym",
        "Marble & oak interiors",
        "360° ocean views",
        "Automated lighting & climate control",
        "Private dock for yachts",
      ],
    },
    {
      name: "Grand Palace Estate",
      image:
        "https://images.pexels.com/photos/13620073/pexels-photo-13620073.jpeg",
      features: [
        "10 Bedrooms with royal suites",
        "12 Designer Bathrooms with gold fittings",
        "Gourmet kitchen & wine cellar",
        "4 Majestic floors + rooftop garden",
        "Glass-domed ballroom",
        "Private spa & wellness center",
        "Handcrafted woodwork interiors",
        "Panoramic mountain views",
        "Voice-controlled automation",
        "Helipad & luxury garage",
      ],
    },
  ];

  return (
    <section className="bg-shell px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Top Luxury Picks"
          title="Comparing Two of the World’s Finest Estates"
          description="Explore a side-by-side comparison of our most prestigious residences—highlighting unique amenities, design, and lifestyle offerings."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {houses.map((house, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="bg-white group  rounded-2xl shadow-collage overflow-hidden flex flex-col"
            >
              <img
                src={house.image}
                alt={house.name}
                className="w-full h-64 group-hover:scale-105 transition-all duration-500 blur-none lg:blur-sm group-hover:blur-none object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-serif text-forest">{house.name}</h2>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  {house.features.map((feature, idx) => (
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

export default HouseComparing;
