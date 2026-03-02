import { ArrowBigDown, List, Search } from "lucide-react";
import VideoContainer from "../components/VideoContainer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { VIDEO_PATHS } from "../lib/data/video-path";
import { useState } from "react";
import GetStarted from "../components/GetStarted";

function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <VideoContainer videoPath={VIDEO_PATHS} />
      <Nav onOpenDrawer={() => setIsDrawerOpen(true)} />
      <h1 className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-white text-[clamp(20px,5vw,80px)] text-center font-bold tracking-tight w-full drop-shadow-2xl">
        Smart AI <br />
        <span className="text-jspark-primary">for Frontline Decision-Making</span>
      </h1>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
        <p className="text-xs uppercase tracking-widest font-medium">Scroll to explore</p>
        <ArrowBigDown className="animate-bounce mt-1" />
      </div>

      {/* mobile view control bar */}
      <div className="bottom-6 z-1000 flex justify-between fixed left-4 right-4 md:hidden">
        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsDrawerOpen(true)}
          className="shadow-xl"
        >
          Get started
        </Button>

        <div className="flex bg-structure/80 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-xl">
          <Button
            size="icon"
            variant="outline"
            className="border-none text-white px-3"
            onClick={() => navigate("/search")}
          >
            <Search strokeWidth={1.5} size={18} />
          </Button>
          <div className="w-px h-6 bg-white/10 self-center" />
          <Button
            size="icon"
            variant="outline"
            className="border-none text-white px-3"
            onClick={() => navigate("/menu")}
          >
            <List strokeWidth={1.5} size={18} />
          </Button>
        </div>
      </div>

      {isDrawerOpen && (
        <GetStarted onClose={() => setIsDrawerOpen(false)} />
      )}
    </div>
  );
}

export default Navbar;
