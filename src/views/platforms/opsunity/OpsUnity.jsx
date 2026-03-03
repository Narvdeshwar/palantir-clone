import { useState } from "react";
import HeroOpsUnity from "./comp/HeroOpsUnity";
import HeroSubheader from "./comp/HeroSubheader";
import GetStarted from "../../../components/GetStarted";
import Explore from "./comp/Explore";
import Designed from "./comp/Designed";
import Solving from "./comp/Solving";
import Footer from "@/layout/Footer";
import { designedFix } from "../../../lib/data/designed-data";

function OpsUnity() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroOpsUnity />
      <HeroSubheader onOpen={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      <Explore />
      <Designed data={designedFix} theme="dark" />
      <Solving />
      <Footer theme="dark" />
    </div>
  );
}

export default OpsUnity;
