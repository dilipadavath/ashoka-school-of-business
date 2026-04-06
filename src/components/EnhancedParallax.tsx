import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedParallaxProps {
  children: ReactNode;
  bgImage: string;
  className?: string;
  overlay?: string;
  intensity?: number;
  parallaxY?: boolean;
  parallaxX?: boolean;
  parallaxScale?: boolean;
  parallaxRotate?: boolean;
}

interface MotionStyle {
  y?: MotionValue<string>;
  x?: MotionValue<string>;
  scale?: MotionValue<number>;
  rotate?: MotionValue<number>;
}

const EnhancedParallax = ({
  children,
  bgImage,
  className = "",
  overlay = "bg-charcoal/60",
  intensity = 0.3,
  parallaxY = true,
  parallaxX = false,
  parallaxScale = false,
  parallaxRotate = false,
}: EnhancedParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Always call all hooks at the top level
  const yTransform = useTransform(scrollYProgress, [0, 1], [
    `${-20 * intensity}%`,
    `${20 * intensity}%`,
  ]);

  const xTransform = useTransform(scrollYProgress, [0, 1], [
    `${-10 * intensity}%`,
    `${10 * intensity}%`,
  ]);

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [
    1 + 0.1 * intensity,
    1 - 0.05 * intensity,
  ]);

  const rotateTransform = useTransform(scrollYProgress, [0, 1], [
    -2 * intensity,
    2 * intensity,
  ]);

  // Return early component if all effects are disabled
  if (!parallaxY && !parallaxX && !parallaxScale && !parallaxRotate) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 -top-[20%] -bottom-[20%]">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute inset-0 ${overlay}`} />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Build the style object based on enabled effects
  const style: MotionStyle = {};
  if (parallaxY) style.y = yTransform;
  if (parallaxX) style.x = xTransform;
  if (parallaxScale) style.scale = scaleTransform;
  if (parallaxRotate) style.rotate = rotateTransform;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={style} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default EnhancedParallax;
