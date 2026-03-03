import VideoContainer from "@/components/VideoContainer";

function HeroJSPARKVision() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <VideoContainer
        videoPath={[
          "https://videos.ctfassets.net/xrfr7uokpv1b/W2oAJrtiujYtoTJWkgyS3/362140aaea3ca716ade045de6e3bc32e/Gotham-Hero.mp4",
        ]}
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-white font-thin text-[36px] sm:text-[70px] md:text-[110px] lg:text-[150px] xl:text-[190px] 2xl:text-[230px] w-full leading-none text-center">
          JSPARK Vision
        </div>
      </div>
    </div>
  );
}

export default HeroJSPARKVision;
