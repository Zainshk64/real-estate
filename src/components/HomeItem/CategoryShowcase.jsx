
import { categories } from "../../data/listing.js"
import SectionHeader from "../SectionHeader.jsx"
import { motion } from "framer-motion"
import { Compass } from "lucide-react"

function CategoryShowcase() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeader
          eyebrow="Choose Your Realm"
          title="Lifestyle collections curated like playlists"
          description="Select a mood board and unlock concierge tours, trend reports, and member-only financing aligned to each collection."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.name}
              className="group relative overflow-hidden rounded-[32px] bg-white shadow-collage"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.45 }}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-95" /> */}
              
              <div className="relative flex h-64 flex-col justify-between p-6 text-sand">
                <div className="flex items-center justify-between">
                  <h3 className="font  text-2xl">{category.name}</h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-shell/20">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="text-sm text-shell/90">{category.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase
