import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  gridCols?: string;
}

const StaggeredGrid = ({
  children,
  className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  staggerDelay = 0.1,
  delay = 0,
  gridCols,
}: StaggeredGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={gridCols ? gridCols : className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGrid;
