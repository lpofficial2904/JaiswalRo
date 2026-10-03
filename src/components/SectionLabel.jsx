import { motion, useReducedMotion } from "framer-motion";

export default function SectionLabel({ children }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="eyebrow"
      initial={reduceMotion ? false : { opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.45, 1], opacity: [1, 0.65, 1] }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}
