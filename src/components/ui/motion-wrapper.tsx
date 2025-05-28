"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

export const zoomInGlow: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const fadeInRightStagger: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
};

export const iconWiggle: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -5, 5, 0],
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

// Motion wrapper components
interface MotionDivProps extends HTMLMotionProps<"div"> {
  variant?: keyof typeof animationVariants;
  delay?: number;
  duration?: number;
}

const animationVariants = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
  zoomInGlow,
  fadeInRightStagger
};

export const MotionDiv = ({
  children,
  className,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.5,
  ...props
}: MotionDivProps) => {
  const selectedVariant = animationVariants[variant];

  return (
    <motion.div
      className={cn(className)}
      variants={selectedVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for animating multiple children
export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: HTMLMotionProps<"div"> & { staggerDelay?: number }) => {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: staggerDelay
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scroll reveal component
export const ScrollReveal = ({
  children,
  className,
  variant = "fadeInUp",
  threshold = 0.1,
  ...props
}: MotionDivProps & { threshold?: number }) => {
  return (
    <motion.div
      className={cn(className)}
      variants={animationVariants[variant]}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hover scale component
export const HoverScale = ({
  children,
  className,
  scale = 1.02,
  ...props
}: HTMLMotionProps<"div"> & { scale?: number }) => {
  return (
    <motion.div
      className={cn(className)}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Typing animation component
export const TypedText = ({
  text,
  className,
  delay = 0,
  speed = 0.05
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) => {
  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * speed),
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
