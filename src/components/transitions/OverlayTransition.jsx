import { motion } from "framer-motion";

export default function OverlayTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 pointer-events-none"
      initial={{ y: "100%" }}
      animate={{ y: "100%" }}
      exit={{ y: 0 }}
      transition={{
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1],
      }}
    />
  );
}
