import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <section className="bg-shell pb-24 pt-47">
      <div className="flex flex-col md:flex-row items-start justify-between mx-auto w-full max-w-6xl">
        <div className="px-4">
          <motion.h1
            className="font-serif text-balance text-4xl leading-tight md:text-5xl lg:text-[56px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Automate Your Lead Generation with Intelligence
          </motion.h1>
          <p className="text-pretty lg:w-144 mt-5 text-base text-ink/75 md:text-lg">
            Discover, engage, and convert leads across multiple platforms
            powered by AI automation, analytics, and campaigns built for growth.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-[var(--color-clay)] text-white hover:bg-[var(--color-forest)] transition-all cursor-pointer duration-500">
            Get Started
          </button>
        </div>
        <div className="scale-125 hidden md:flex">
          <DotLottieReact
            src="/featurehero.lottie"
            loop
            autoplay
            style={{ width:500, height: 500 }}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Section1;
