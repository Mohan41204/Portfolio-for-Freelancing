import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";

const motionComponents = {
  div: motion.div,
  header: motion.header,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  a: motion.a,
  article: motion.article,
  span: motion.span,
};

const defaultVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 20,
    opacity: 0,
  },
};

export function TimelineContent({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.15 });
  const Component = motionComponents[as] || motion.div;
  const variants = customVariants || defaultVariants;

  return (
    <Component
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
