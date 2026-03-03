import { ArrowRight } from "lucide-react";
import whatOtherSayAbout from "../../../lib/data/whatothersay";
import { Link } from "react-router-dom";
export default function WhatOtherSay() {
  const triplicatedData = [
    ...whatOtherSayAbout,
    ...whatOtherSayAbout,
    ...whatOtherSayAbout,
  ];

  return (
    <div className="p-10 bg-bg-app">
      <div className="w-full overflow-hidden">
        <div className="border-t border-white/10 w-full mb-8" />
        <p className="text-3xl font-bold mb-10 text-white tracking-tight">
          What our partners say about us
        </p>

        {/* Main scroll wrapper */}
        <div className="relative w-full overflow-hidden mb-12">
          <div className="scroll-container gap-6">
            {triplicatedData.map((item, index) => (
              <div
                key={index}
                className="
                  bg-card w-[450px] h-[450px] p-8
                  shrink-0
                  [clip-path:polygon(0_0,85%_0,100%_15%,100%_100%,0_100%)]
                  rounded-2xl relative overflow-hidden border border-white/5
                  shadow-xl transition-all duration-300
                  group/item hover:border-jspark-primary/30 hover:shadow-jspark-primary/5
                "
              >
                {/* Company */}
                <p className="text-jspark-primary font-bold text-2xl mb-4 italic">
                  {item.company}
                </p>

                {/* Quote */}
                <p
                  className="
                    absolute left-8 right-8
                    text-white/60 text-lg group-hover/item:text-white
                    transition-all duration-500 ease-out
                    bottom-8 group-hover/item:bottom-1/2
                    group-hover/item:translate-y-1/2
                    leading-relaxed
                  "
                >
                  "{item.quote}"
                </p>

                {/* Author */}
                <div
                  className="
                    absolute bottom-8 left-8 right-8
                    opacity-0 group-hover/item:opacity-100
                    transition-opacity duration-300 ease-in-out
                  "
                >
                  <p className="font-bold text-white text-md">
                    {item.author_name}
                  </p>
                  <p className="text-xs text-white/40 tracking-wider uppercase mt-1">
                    {item.author_title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 w-full mt-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* LEFT BUTTON */}
        <Link to="/get-started" className="group">
          <div className="flex justify-between items-center p-8 bg-card rounded-2xl border border-white/5 hover:border-jspark-primary/40 transition-all duration-300 hover:shadow-2xl active:scale-[0.98]">
            <span className="text-3xl font-bold text-white">Request a Demo</span>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-jspark-primary text-white group-hover:scale-110 transition-transform">
              <ArrowRight />
            </div>
          </div>
        </Link>

        {/* RIGHT BUTTON */}
        <div className="group cursor-pointer">
          <div className="flex justify-between items-center p-8 bg-jspark-primary/10 rounded-2xl border border-jspark-primary/20 hover:border-jspark-primary transition-all duration-300 hover:shadow-2xl active:scale-[0.98]">
            <span className="text-3xl font-bold text-jspark-primary">Start Building</span>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-jspark-primary text-white group-hover:scale-110 transition-transform">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
