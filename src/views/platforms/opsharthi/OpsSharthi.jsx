import ActivateAISection from "./comp/ActivateAISection";
import HeroOpsSharthi from "./comp/HeroOpsSharthi";
import OpsSharthiExplainPage from "./comp/OpsSharthiExplainPage";
import OpsSharthiStackSection from "./comp/OpsSharthiStackSection";
import Footer from "@/layout/Footer"

function OpsSharthi() {
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroOpsSharthi />
      <OpsSharthiExplainPage />
      <OpsSharthiStackSection />
      <ActivateAISection />
      <Footer theme="dark" />
    </div>
  );
}

export default OpsSharthi;
