import { stories } from "../../data/listing.js"
import SectionHeader from "../SectionHeader.jsx"
import { motion } from "framer-motion"

function MarketStories() {
  return (
    <section className="bg-shell px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeader
          eyebrow="Orbit Dispatch"
          title="Fresh market stories shaping architectural living"
          description="Insights, developer interviews, and climate-positive innovations delivered daily. Inspired by the depth of automotive marketplaces, evolved for property."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <motion.article
            className="overflow-hidden rounded-[32px] bg-white shadow-collage lg:row-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={stories[0].image || "/placeholder.svg"}
              alt={stories[0].title}
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <div className="space-y-4 p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-forest">{stories[0].publisher}</span>
              <h3 className="font-serif text-3xl leading-tight">{stories[0].title}</h3>
              <p className="text-sm text-ink/70">
                Explore how hybrid hospitality bridges the expectations of global buyers seeking flexible, resilient
                residences designed for both calm and productivity.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-ink"
              >
                Read full story →
              </a>
            </div>
          </motion.article>
          {stories.slice(1).map((story, index) => (
            <motion.article
              key={story.title}
              className="flex flex-col overflow-hidden rounded-[28px] bg-white shadow-collage"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.45 }}
            >
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-3 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-forest">{story.publisher}</span>
                <h3 className="font-serif text-2xl leading-snug">{story.title}</h3>
                <a href={story.url} className="text-sm font-semibold text-forest transition hover:text-ink">
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketStories
