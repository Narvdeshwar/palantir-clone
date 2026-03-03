import Footer from "../../../Layout/Footer";
import AwardsSection from "./comp/AwardSection";
import GetStartedOpsSharthi from "./comp/GetStartedOpsSharthi";
import GlobalImpact from "./comp/GlobalImpact";
import HeroPrimeEAM from "./comp/HeroPrimeEAM";
import OpsSharthiExplain from "./comp/OpsSharthiExplain";
import OpsSharthiOperation from "./comp/OpsSharthiOperation";
import OpsSharthiSection from "./comp/RealTimeColl";

function PrimeEAM() {
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroPrimeEAM />
      <OpsSharthiExplain />
      <OpsSharthiSection />
      <OpsSharthiOperation />
      <GlobalImpact />
      <AwardsSection />
      <GetStartedOpsSharthi />
      <Footer theme="dark" />
    </div>
  );
}

export default PrimeEAM;
