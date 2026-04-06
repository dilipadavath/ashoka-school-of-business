import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <motion.span>
          <CountUp end={end} duration={duration} decimals={decimals} prefix={prefix} suffix={suffix} />
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
};

interface CountUpProps {
  end: number;
  duration: number;
  decimals: number;
  prefix: string;
  suffix: string;
}

function CountUp({ end, duration, decimals, prefix, suffix }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;
    const range = endValue - startValue;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      const value = startValue + range * easeOutQuad;

      node.textContent =
        prefix +
        (decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()) +
        suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    update();
  }, [end, duration, decimals, prefix, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default AnimatedCounter;
