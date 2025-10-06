import SectionHeader from "../SectionHeader";

const Section4 = () => {
  return (
    <section className="bg-shell py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeader
          eyebrow="Start Today"
          title="Ready to Power Your Business Growth?"
          description="Join thousands of businesses automating their lead generation and marketing workflows."
        />
        
        <button className="px-8 mt-8 py-3 bg-[var(--color-clay)] text-white rounded-full hover:bg-[var(--color-forest)] transition-all duration-500 cursor-pointer">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default Section4;
