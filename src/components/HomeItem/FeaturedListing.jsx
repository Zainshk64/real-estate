import { motion } from "framer-motion";
import { featuredListings } from "../../data/listing.js";
import SectionHeader from "../SectionHeader.jsx";
import TagPill from "../TagPill.jsx";
import { Link } from "react-router-dom";

function FeaturedListings() {
  return (
    <section className="bg-shell py-20">
      <div className="mx-auto w-full px-4 max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Featured Business Solutions"
          title="Discover Our Smart Tools Across Industries"
          description="From luxury properties and retail stores to digital agencies and manufacturing units — explore how our platform adapts seamlessly to different business needs."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredListings.map((listing, index) => (
            <motion.article
              key={listing.id}
              className="flex h-full group  flex-col overflow-hidden rounded-[28px] bg-white text-ink shadow-collage transition hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.45 }}
            >
              <img
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                className="h-56 w-full scale-115 group-hover:-translate-y-5 transition-all duration-500 object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-serif text-2xl leading-tight">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-ink/70">{listing.location}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {listing.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold text-forest">
                    {listing.price}
                  </span>
                  <Link
                    to={`/house/${listing.id}`}
                    onClick={() => scrollTo(0, 0)}
                  >
                    <button className="rounded-pill cursor-pointer border border-forest/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-forest transition hover:border-forest">
                      See details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedListings;
