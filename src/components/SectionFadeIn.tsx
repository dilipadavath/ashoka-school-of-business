import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-left" | "fade-right" | "zoom" | "rotate" | "slide-up";
  duration?: number;
}

const SectionFadeIn = ({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  duration = 0.6,
}: Props) => {
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
    },
    "fade-left": {
      initial: { opacity: 0, x: -30 },
      whileInView: { opacity: 1, x: 0 },
    },
    "fade-right": {
      initial: { opacity: 0, x: 30 },
      whileInView: { opacity: 1, x: 0 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -5, scale: 0.9 },
      whileInView: { opacity: 1, rotate: 0, scale: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionFadeIn;
