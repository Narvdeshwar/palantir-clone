import VideoContainer from "@/components/VideoContainer";
import TypewriterText from "./TypeWriter";

function HeroOpsSharthi() {
  return (
    <>
      <div className="relative flex justify-center">
        <VideoContainer
          videoPath={[
            "https://videos.ctfassets.net/xrfr7uokpv1b/3OdpFewxNsyosFoEgg0IFO/064ba03ffd3d6349f14c8abd7dc808c6/output_video.mp4",
          ]}
        />

        <p className="absolute z-10 text-white bottom-10">Swipe to explore</p>
      </div>

      <div className="flex flex-col gap-5 text-white">
        {/* Section 1 */}
        <div className="p-10 flex justify-around items-center space-y-10 flex-col md:flex-row">
          <TypewriterText
            text="OpsSharthi System"
            className="text-8xl text-center text-white"
            speed={40}
          />

          <TypewriterText
            text="The operational brain for real-time infrastructure control."
            className="text-2xl max-w-xl text-center md:text-left text-gray-400"
            speed={20}
          />
        </div>

        <hr className="w-[95%] mx-auto opacity-10" />

        {/* Section 2 */}
        <div className="p-10 flex justify-around items-center space-y-10 flex-col md:flex-row">
          <TypewriterText
            text="The foundation of unified operational control"
            className="text-5xl max-w-2xl text-white"
            speed={35}
          />

          <TypewriterText
            text="Connects infrastructure data, operational workflows, and safety systems to coordinate automated responses in real time."
            className="text-2xl max-w-xl text-center md:text-left text-gray-400"
            speed={18}
          />
        </div>
      </div>
    </>
  );
}

export default HeroOpsSharthi;
