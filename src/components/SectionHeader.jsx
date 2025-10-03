import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.header
      className="space-y-4 text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {eyebrow && (
        <>
          <span className="inline-flex items-center gap-2 rounded-pill bg-sand/50 px-3 py-1 text-xs uppercase tracking-[0.3em] text-forest">
            {eyebrow}
          </span>
        </>
      )}
      <h2 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h2>
      <p className="text-sm text-ink/75 md:max-w-2xl">{description}</p>
    </motion.header>
  );
}

export default SectionHeader;
