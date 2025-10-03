import { motion } from "framer-motion"

const stats = [
  { value: "740+", label: "Boutique developers onboarded in 2025" },
  { value: "68", label: "Cities with immersive preview suites" },
  { value: "92%", label: "Buyers matching within 14 days" },
  { value: "312", label: "Exclusive off-market estates live now" },
]

function StatsStrip() {
  return (
    <section className="border- border-forest/15 bg-/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="flex flex-col gap-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <span className="font-serif text-3xl text-forest md:text-4xl">{stat.value}</span>
            <p className="text-sm text-ink/70 md:max-w-[200px]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
