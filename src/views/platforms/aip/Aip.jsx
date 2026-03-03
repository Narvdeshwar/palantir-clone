import { useState } from "react";
import HeroAip from "./comp/HeroAip";
import HeroSubheader from "./comp/HeroSubheader";
import GetStarted from "../../../components/GetStarted";
import Explore from "./comp/Explore";
import Designed from "./comp/Designed";
import Solving from "./comp/Solving";
import Footer from "@/layout/Footer";
import { designedFix } from "../../../lib/data/designed-data";

function Aip() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroAip />
      <HeroSubheader onOpen={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      <Explore />
      <Designed data={designedFix} theme="dark" />
      <Solving />
      <Footer theme="dark" />
    </div>
  );
}

export default Aip;
