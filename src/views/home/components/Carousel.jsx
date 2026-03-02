import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownLeft, ArrowLeft, ArrowRight } from "lucide-react";
import { carouselData } from "../../../lib/data/carousel-data";
import Button from "../../../components/Button";

function Carousel() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.7]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );

  const handleButtonClick = (index) => setActiveIndex(index);

  return (
    <section
      ref={ref}
      className="relative min-h-fit md:min-h-[130vh] bg-bg-app overflow-hidden flex flex-col items-center justify-start pt-16 border-b border-border shadow-inner"
    >

      <motion.div
        style={{ y, opacity }}
        className="hidden md:flex z-70 flex-wrap gap-4 justify-center w-[98%] mx-auto mt-10"
      >
        {carouselData.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <Button
              key={item.id}
              onClick={() => handleButtonClick(index)}
              variant={isActive ? "primary" : "secondary"}
              className={`px-8 py-3 !rounded-full transition-all group ${isActive ? "shadow-lg shadow-jspark-primary/20" : ""
                }`}
            >
              {isActive && (
                <motion.div
                  key={item.id + "-fill"}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-white/10 z-0"
                />
              )}
              <span className="relative z-10 uppercase tracking-widest text-[13px] font-bold">
                {item.title}
              </span>
            </Button>
          );
        })}
      </motion.div>

      <div className="hidden md:block absolute inset-0 z-50 mt-64 w-[96%] mx-auto h-[85vh] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-border">
        {carouselData.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.05,
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-10 left-10 bg-structure text-white p-8 rounded-2xl max-w-2xl border border-white/10 shadow-2xl"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-jspark-primary mb-3">
                    {item.earmark || item.title}
                  </p>

                  <a
                    href={item.link || "#"}
                    className="group block"
                  >
                    <h2 className="text-4xl font-bold leading-tight mb-4 group-hover:text-jspark-primary transition-colors">
                      {item.description}
                    </h2>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-all">
                      <span>Explore Capability</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* DESKTOP CONTROLS */}
        <div className="absolute bottom-12 right-12 flex gap-4 z-60">
          <Button
            size="icon"
            variant="secondary"
            onClick={handlePrev}
            className="w-16 h-16 rounded-full !bg-white/5 hover:!bg-white/10 border-white/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={handleNext}
            className="w-16 h-16 rounded-full !bg-white/5 hover:!bg-white/10 border-white/10"
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* DESKTOP OVERLAY GRADIENT */}
      <div className="hidden md:block absolute inset-0 z-40 bg-gradient-to-b from-bg-app via-transparent to-bg-app opacity-60 pointer-events-none" />

      <div className="md:hidden w-full px-4 mt-12 flex flex-col items-center z-10">

        {/* Title */}
        <h2 className="text-page-title mb-4 text-center">
          {carouselData[activeIndex].title}
        </h2>

        {/* Mobile image + tap zones */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border">
          <img
            src={carouselData[activeIndex].src}
            alt={carouselData[activeIndex].title}
            className="w-full h-full object-cover object-center"
          />

          {/* TAP ZONES */}
          <div onClick={handlePrev} className="absolute left-0 top-0 h-full w-1/3 z-20" />
          <div onClick={handleNext} className="absolute right-0 top-0 h-full w-2/3 z-20" />
        </div>

        {/* Description */}
        <div className="mt-6 bg-structure p-6 rounded-2xl shadow-xl border border-white/5 w-full">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-jspark-primary mb-2">
            {carouselData[activeIndex].earmark ||
              carouselData[activeIndex].title}
          </p>

          <p className="text-white text-base leading-relaxed font-medium">
            {carouselData[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
