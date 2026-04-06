import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  offset?: number;
  scale?: boolean;
  className?: string;
}

const FloatingElement = ({
  children,
  duration = 4,
  delay = 0,
  offset = 20,
  scale = false,
  className = "",
}: FloatingElementProps) => {
  const floatingVariants = {
    animate: {
      y: [-offset / 2, offset / 2, -offset / 2],
      scale: scale ? [1, 1.05, 1] : undefined,
      transition: {
        duration,
        repeat: Infinity,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={floatingVariants}
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
