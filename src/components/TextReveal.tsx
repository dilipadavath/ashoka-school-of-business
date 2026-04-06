import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  variant?: "word" | "line" | "char";
}

const TextReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  className = "",
  variant = "word",
}: TextRevealProps) => {
  // Extract text from children
  const text = typeof children === "string" ? children : "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  if (variant === "char") {
    const chars = text.split("");
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {chars.map((char, idx) => (
          <motion.span key={idx} variants={itemVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  const words = text.split(" ");
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={itemVariants} className="inline-block">
          {word}
          {idx < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
