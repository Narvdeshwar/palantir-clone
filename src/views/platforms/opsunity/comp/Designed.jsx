import { useState, useRef, useEffect } from "react";

function Switcher({ video, details, theme }) {
  const [isVideo, setVideo] = useState(true);

  const isDark = theme === "dark";

  return (
    <>
      {/* SWITCH BUTTONS */}
      <div className={`border rounded-full w-fit p-1 space-x-1 text-sm sm:text-base ${isDark ? "border-white/10 bg-white/5" : "border-black/10"}`}>
        <button
          onClick={() => setVideo(true)}
          className={`rounded-full px-4 py-1.5 font-medium transition-all duration-300 backdrop-blur-md ${isVideo
              ? (isDark ? "bg-white/10 text-white shadow-sm" : "bg-black text-white")
              : (isDark ? "text-white/50 hover:text-white" : "text-black/60 hover:text-black")
            }`}
        >
          Video
        </button>
        <button
          onClick={() => setVideo(false)}
          className={`rounded-full px-4 py-1.5 font-medium transition-all duration-300 backdrop-blur-md ${!isVideo
              ? (isDark ? "bg-white/10 text-white shadow-sm" : "bg-black text-white")
              : (isDark ? "text-white/50 hover:text-white" : "text-black/60 hover:text-black")
            }`}
        >
          Details
        </button>
      </div>

      {/* VIDEO SECTION */}
      {isVideo ? (
        <div className={`mt-6 border rounded-xl p-1 shadow-lg ${isDark ? "border-white/10 bg-white/5" : "border-black/10"}`}>
          <video
            src={video}
            autoPlay
            loop
            muted
            className="rounded-xl w-full object-cover max-h-[55vh] sm:max-h-[65vh]"
          />
        </div>
      ) : (
        <div
          className={`
            mt-4 rounded-xl p-4 sm:p-6 shadow-lg space-y-6 transition-all duration-500
            border
            ${isDark
              ? "text-white border-white/10" // DARK MODE
              : " text-black border-black/10" // LIGHT MODE
            }
          `}
        >
          {details.map((d, i) => (
            <div key={i} className="space-y-2">
              <p
                className={`text-xl sm:text-2xl font-semibold ${isDark ? "text-white" : "text-black"
                  }`}
              >
                {d.title}
              </p>
              <p
                className={`text-sm sm:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Designed({ data, theme = "light" }) {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.dataset.index));
          }
        });
      },
      { threshold: 0.55 }
    );

    sectionRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-[90%] mx-auto space-y-5 md:space-y-20 py-20">
      {data.map((item, i) => (
        <section
          key={i}
          data-index={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="
            grid
            grid-cols-1
            md:grid-cols-[0.6fr_1fr]
            gap-2 md:gap-14
            min-h-[90vh] md:min-h-screen
            items-center
          "
        >
          {/* LEFT TITLE SECTION */}
          <div>
            <p className={`text-[clamp(20px,5vw,30px)] sm:text-5xl md:text-6xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-black"}`}>
              {item.title}
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className={`text-sm sm:text-lg md:text-xl mb-4 md:mb-5 ${theme === "dark" ? "text-white/60" : "text-gray-700"}`}>
              {item.subtitle}
            </p>
            <p className={`text-sm sm:text-lg md:text-xl mb-4 md:mb-8 ${theme === "dark" ? "text-white/60" : "text-gray-700"}`}>
              {item.subtitle1}
            </p>
            <Switcher
              video={item.videoSrc}
              details={item.details}
              theme={theme}
            />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Designed;
