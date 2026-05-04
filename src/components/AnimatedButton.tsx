import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glowing?: boolean;
  disableHover?: boolean;
}

const baseStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-2 border-primary text-primary hover:bg-primary/10",
  ghost: "text-foreground hover:bg-foreground/10",
};

const AnimatedButton = ({
  children,
  href,
  external,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  glowing = false,
  disableHover = false,
}: AnimatedButtonProps) => {
  const buttonVariants = disableHover ? {} : {
    whileHover: {
      scale: 1.05,
      boxShadow: glowing
        ? "0 0 25px rgba(215, 41, 74, 0.5), 0 0 50px rgba(215, 41, 74, 0.3)"
        : "0 10px 25px rgba(0, 0, 0, 0.2)",
    },
    whileTap: { scale: 0.98 },
  };

  const baseClasses = `inline-flex items-center justify-center rounded-lg font-semibold transition-all ${baseStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          variants={buttonVariants}
          whileHover={disableHover ? undefined : "whileHover"}
          whileTap={disableHover ? undefined : "whileTap"}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div variants={buttonVariants} whileHover={disableHover ? undefined : "whileHover"} whileTap={disableHover ? undefined : "whileTap"}>
        <Link to={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      variants={buttonVariants}
      whileHover={disableHover ? undefined : "whileHover"}
      whileTap={disableHover ? undefined : "whileTap"}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
