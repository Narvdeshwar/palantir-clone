import GetStarted from "../opsharthi/comp/GetStarted";
import DevOpsStrategy from "./comp/Devstrat";
import EnvironmentsCarousel from "./comp/EnviromentalCarousel";
import { FeatureOverview } from "./comp/FeatureOverview";
import HeroOpsMind from "./comp/HeroOpsMind";
import ExploreSolutions from "./comp/Solutions";
import Footer from "@/layout/Footer";

function OpsMind() {
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroOpsMind />
      <FeatureOverview />
      <DevOpsStrategy />
      <ExploreSolutions />
      <EnvironmentsCarousel />
      <GetStarted />
      <Footer theme="dark" />
    </div>
  );
}

export default OpsMind;
