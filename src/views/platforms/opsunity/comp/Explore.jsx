import { useRef, useState, useEffect } from "react";
import { V4 } from "../../../../assets/videos";

function CardDesign({ title, count }) {
  return (
    <div className="border border-white/10 p-4 rounded-xl w-32 sm:w-40 bg-white/5 backdrop-blur-md hover:border-jspark-primary/40 transition-colors">
      <p className="text-white text-sm sm:text-base font-medium">{title}</p>
      <p className="text-jspark-primary font-mono text-[10px] sm:text-xs tracking-widest mt-1">/0{count}</p>
    </div>
  );
}

const positions = [
  {
    A: {
      divPos:
        "w-[60vw] sm:w-[420px] md:w-[520px] lg:w-[620px] top-[20%] right-2 md:right-6 h-32 md:h-64",
      spanPos: "top-[32%] left-[55%]",
    },
  },
  {
    B: {
      divPos:
        "w-[65vw] sm:w-[420px] md:w-[520px] lg:w-[620px] top-[50%] right-2 md:right-6 h-48 md:h-[360px]",
      spanPos: "top-[58%] left-[55%]",
    },
  },
  {
    C: {
      divPos: "w-[120px] sm:w-[140px] top-[70%] right-6 h-10 sm:h-14",
      spanPos: "top-[74%] right-[20%]",
    },
  },
];

function Explore() {
  const wrapperRef = useRef(null);
  const [activePosition, setActivePosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (wrapperTop > windowHeight) {
        setActivePosition(null);
        return;
      }

      if (wrapperTop + wrapperHeight < 0) {
        setActivePosition(2);
        return;
      }

      const scrollProgress = Math.max(
        0,
        Math.min(1, -wrapperTop / (wrapperHeight - windowHeight))
      );

      if (scrollProgress < 0.25) setActivePosition(null);
      else if (scrollProgress < 0.55) setActivePosition(0);
      else if (scrollProgress < 0.85) setActivePosition(1);
      else setActivePosition(2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between w-[95%] mx-auto gap-6 pt-20">
        <div>
          <p className="text-4xl sm:text-6xl text-white font-bold tracking-tight">Beyond Chat.</p>
          <p className="text-jspark-primary text-xl sm:text-3xl font-medium mt-2">Explore OpsUnity</p>
        </div>

        <div className="flex gap-2 flex-wrap justify-start sm:justify-end">
          <CardDesign title="AI App" count={1} />
          <CardDesign title="Action-Driven Logic" count={2} />
          <CardDesign title="Automation" count={3} />
        </div>
      </div>

      {/* STATIC VIEW FOR MOBILE */}
      <div className="block md:hidden mt-10 w-[95%] mx-auto">
        <div className="border border-white/20 rounded-md h-[50vh]">
          <video
            src={V4}
            className="w-full h-full object-cover rounded-md"
            autoPlay
            muted
            loop
          />
        </div>
        <p className="text-white/60 text-center mt-4">
          Scroll experience available on larger screens
        </p>
      </div>

      {/* SCROLL ZONE (DESKTOP ONLY) */}
      <div
        ref={wrapperRef}
        className="relative mt-10 hidden lg:block min-h-[260vh] md:min-h-[300vh]"
      >
        <div className="sticky top-0 border border-white/20 w-[95%] mx-auto rounded-md h-screen flex z-10">

          {/* LEFT BORDER */}
          <div className="hidden sm:block w-12 h-full border-r border-white/10"></div>

          {/* MIDDLE CONTENT */}
          <div className="w-full flex flex-col">
            <div className="h-10 sm:h-12 border-b border-white/10"></div>

            <div className="flex-1 relative overflow-hidden">
              <video
                src={V4}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />

              {/* FLOATING POSITIONS */}
              {positions.map((point, i) => {
                const key = Object.keys(point)[0];
                const { divPos, spanPos } = point[key];
                const isActive = activePosition === i;

                return (
                  <div key={key}>
                    <div
                      className={`absolute z-20 /10 rounded-md transition-all duration-700 ${divPos}`}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(0.9)",
                      }}
                    />
                    <span
                      className={`absolute size-6 sm:size-8 /50 text-black ${spanPos}
                        -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold transition-all duration-700`}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translate(-50%, -50%) scale(1)"
                          : "translate(-50%, -50%) scale(0.5)",
                      }}
                    >
                      {key}
                    </span>
                  </div>
                );
              })}

              {/* POSITION INDICATOR */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium text-xs sm:text-sm bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-xl uppercase tracking-widest">
                Scroll to explore • Node:{" "}
                <span className="text-jspark-primary font-bold">
                  {activePosition === null
                    ? "NA"
                    : String.fromCharCode(65 + activePosition)}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT BORDER */}
          <div className="hidden sm:block w-12 h-full border-l border-white/10"></div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
