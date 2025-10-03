import { testimonials } from "../../data/listing.js"
import { motion } from "framer-motion"
import SectionHeader from "../SectionHeader.jsx"
import { MessageSquare } from "lucide-react"

function Testimonials() {
  return (
    <section className="bg- px-4 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeader
          eyebrow="Trust Signals"
          title="Residents who stepped into their signature space"
          description="From beach villas to skyline lofts, clients share how Estate Orbit choreographed the smoothest transition into their dream address."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              className="flex h-full flex-col gap-5 rounded-[28px] border border-forest/10 bg-white p-8 shadow-collage"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.45 }}
            >
              <MessageSquare className="h-6 w-6 text-forest" aria-hidden="true" />
              <p className="text-lg text-ink/80">“{testimonial.quote}”</p>
              <footer className="mt-auto">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-ink/60">{testimonial.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
