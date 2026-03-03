import { motion, AnimatePresence } from "framer-motion";
import steps from "../../../lib/data/table-data";
import { useState } from "react";
import { Link } from "react-router-dom";

function TableAnimate() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <>
      <div className="flex flex-col w-full divide-y divide-white/5 overflow-hidden pb-24">
        {steps.map((step, index) => (
          <Link to={step.slug} key={step.id}>
            <div
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`grid
              grid-cols-1
              md:grid-cols-[2fr_1.2fr_2.5fr]
              items-center cursor-pointer py-12 px-4 md:px-12
              transition-all duration-500 gap-3
              ${hoveredStep === index ? "bg-white/[0.03]" : "bg-transparent"}`}
            >
              {/* Mobile View */}
              <div className="md:hidden w-full flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-small-label uppercase tracking-[0.2em] font-bold text-jspark-primary">
                    {step.title}
                  </h3>
                  <p className="text-white/20 font-mono text-sm">
                    /{step.id.toString().padStart(2, '0')}
                  </p>
                </div>
                <p className="text-white text-4xl font-bold leading-tight tracking-tighter">
                  {step.description}
                </p>
              </div>

              {/* Desktop Left Section (Big Text) */}
              <motion.div
                animate={hoveredStep === index ? { x: 20, color: "var(--color-jspark-primary)" } : { x: 0, color: "#ffffff" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden md:block text-left text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[1.1] tracking-tighter"
              >
                {step.description}
              </motion.div>

              {/* Desktop Middle Section (Video) */}
              <div className="hidden md:flex justify-center items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {hoveredStep === index && (
                    <motion.video
                      key={step.id}
                      src={step.src}
                      className="w-[320px] aspect-video object-cover rounded-2xl shadow-2xl border border-white/10"
                      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Right Section (Brand Name) */}
              <div className="hidden md:flex flex-col justify-center items-end text-right gap-2">
                <motion.div
                  animate={hoveredStep === index ? { x: -10 } : { x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-jspark-primary font-bold text-xs uppercase tracking-[0.3em] mb-2">
                    /{step.id.toString().padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                    {step.title}
                  </h3>
                </motion.div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default TableAnimate;
