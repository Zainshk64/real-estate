import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToTop } from "../hooks/ScrollToTop";
import { motion } from "framer-motion";
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
    initial={{opacity:0 , y:100}}
    animate={{opacity:1 , y:0}}
    transition={{ duration: 1, delay: 0.1 }}


  
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 duration-75 cursor-pointer bg-forest text-sand rounded-full shadow-lg hover:bg-clay transition-all"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export default BackToTopButton;
