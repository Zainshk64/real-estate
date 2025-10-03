import { motion } from "framer-motion"
import SectionHeader from "../SectionHeader.jsx"
import { Mail } from "lucide-react"

function Newsletter() {
  return (
    <section className="bg-shell px-4 pb-24 pt-12">
      <div className="mx-auto w-full max-w-6xl rounded-[36px] border border-forest/10 bg-white p-10 shadow-collage md:p-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <SectionHeader
            eyebrow="Orbit Briefings"
            title="Receive weekly launches before they go live"
            description="Be the first to visit new residences, access off-market drops, and tap into our design intelligence reports."
          />
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <label className="block">
              <span className="text-sm font-medium text-ink">Email address</span>
              <div className="mt-2 flex items-center gap-3 rounded-[28px] border border-forest/20 bg-shell/60 px-4 py-3">
                <Mail className="h-4 w-4 text-forest" aria-hidden="true" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/50 focus:outline-none"
                />
              </div>
            </label>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-start gap-2 text-xs text-ink/70">
                <input type="checkbox" className="mt-1" />
                Send me curated developer announcements and insider tours.
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-pill bg-forest px-5 py-3 text-sm font-medium text-shell transition hover:bg-ink"
              >
                Join the briefing
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
