import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function PlatformInfo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 10%"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -20]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.4]
  );

  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0.05em", "0em", "-0.02em"]
  );

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <motion.p
        style={{
          y,
          opacity,
          letterSpacing,
          lineHeight: 1.08,
          transition: "all 0.5s ease-out",
        }}
        className="text-[clamp(22px,5vw,62px)] text-black text-center font-600 px-6 platform-info"
      >
        JSPARK AI is building India’s sovereign AI Operating System that enables
        predictive intelligence, autonomous command, and real-time coordination
        for defence, police, smart cities, and critical infrastructure.
      </motion.p>
    </section>
  );
}

export default PlatformInfo;
