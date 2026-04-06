import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardAnimationProps {
  children: ReactNode;
  className?: string;
  index?: number;
  glowing?: boolean;
}

const HoverCardAnimation = ({
  children,
  className = "",
  index = 0,
  glowing = false,
}: HoverCardAnimationProps) => {
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
    whileHover: {
      y: -8,
      boxShadow: glowing
        ? "0 0 30px rgba(215, 41, 74, 0.4), 0 20px 40px rgba(0, 0, 0, 0.15)"
        : "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      whileHover="whileHover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCardAnimation;
