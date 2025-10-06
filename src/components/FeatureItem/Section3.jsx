import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const Section3 = () => {
  return (
    <section className="bg-shell py-20">
      <div className="mx-auto w-full max-w-6xl  px-4 space-y-10">

      <SectionHeader
        eyebrow="Lead Workflow"
        title="Lead Journey Made Simple"
        description="From discovery to conversion — every step of your lead management is streamlined and automated."
      />
      <motion.div
        className="flex my-8 flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-[var(--color-sand)] rounded-xl shadow-md p-8 w-full md:w-1/3">
          <h3 className="font-semibold text-[var(--color-forest)] mb-2">
            1. Scrape
          </h3>
          <p>Search by business type, location, and rating to collect fresh, targeted leads.</p>
        </div>
        <div className="bg-[var(--color-clay)] text-white rounded-xl shadow-md p-8 w-full md:w-1/3">
          <h3 className="font-semibold mb-2">2. Nurture</h3>
          <p>Run automated campaigns across multiple platforms and score lead engagement.</p>
        </div>
        <div className="bg-[var(--color-sand)] rounded-xl shadow-md p-8 w-full md:w-1/3">
          <h3 className="font-semibold text-[var(--color-forest)] mb-2">
            3. Convert
          </h3>
          <p>View analytics, assign leads, and close deals faster with your team dashboard.</p>
        </div>
      </motion.div>
      </div>

    </section>
  );
};

export default Section3;
