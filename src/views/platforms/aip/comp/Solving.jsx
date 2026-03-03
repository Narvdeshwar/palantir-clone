import { ArrowRight } from "lucide-react";
import { solution } from "@/lib/data/solution";
import { builtAIP } from "../../../../lib/data/solution";
import Button from "../../../../components/Button";

function Solving() {
  return (
    <div className="pb-20 space-y-14">
      {/* TOP SECTION */}
      <div
        className="
        w-[90%] mx-auto pt-20
        grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr]
        gap-10
      "
      >
        {/* LEFT */}
        <div className="space-y-6 p-3 md:p-5">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            Turning operational complexity into intelligent control.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="group flex items-center gap-3 border-white/20 hover:border-jspark-primary hover:bg-white/5 text-lg"
          >
            Explore OpsUnity Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* RIGHT SOLUTIONS LIST */}
        <div>
          {solution.map((item, index) => (
            <div
              key={index}
              className="
                border-t border-white/10 flex gap-6 p-6 py-8
                cursor-pointer text-white/50 group hover:bg-white/[0.02] transition-colors
              "
            >
              <p className="text-xl sm:text-2xl font-mono text-jspark-primary/80">0{index + 1}</p>

              <div className="relative w-full">
                <p
                  className="
                  uppercase transition-all duration-500 text-sm sm:text-xl md:text-2xl
                  group-hover:text-white relative
                "
                >
                  {item.title}

                  {/* HOVER IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-40 sm:w-56 md:w-72
                      absolute opacity-0 scale-90
                      group-hover:opacity-100 group-hover:scale-100
                      -top-10 sm:-top-16 left-1/2 -translate-x-1/2
                      transition-all duration-700 ease-out
                      rounded-md shadow-2xl pointer-events-none
                    "
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HEADING */}
      <p className="text-center text-4xl sm:text-5xl md:text-7xl text-white font-semibold">
        Build now with OpsUnity
      </p>

      {/* CARDS SECTION */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-8 w-[90%] mx-auto
      "
      >
        {builtAIP.map((item) => (
          <div
            key={item.title}
            className="
              border border-white/5 p-8 space-y-6 rounded-2xl shadow-xl bg-card
              cursor-pointer hover:border-jspark-primary/40 transition-all duration-500
              hover:scale-[1.02] hover:shadow-jspark-primary/10 group
            "
          >
            <p className="text-white text-xl sm:text-2xl flex justify-between items-center">
              {item.title}
              <ArrowRight
                className="
                  rotate-45 group-hover:rotate-0
                  transition-all duration-700
                "
              />
            </p>

            <div className="space-y-16 md:space-y-4">
              <video
                src={item.videoSrc}
                autoPlay
                loop
                playsInline
                muted
                className="
                  rounded-md object-cover mx-auto
                  aspect-video w-full h-46 md:max-h-40
                "
              ></video>

              <p className="text-white/80 text-sm sm:text-base md:text-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solving;
