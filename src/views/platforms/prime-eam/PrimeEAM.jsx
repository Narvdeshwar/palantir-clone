import Footer from "../../../Layout/Footer";
import AwardsSection from "./comp/AwardSection";
import GetStartedOntology from "./comp/GetStartedOntology";
import GlobalImpact from "./comp/GlobalImpact";
import HeroPrimeEAM from "./comp/HeroPrimeEAM";
import Ontalogy from "./comp/Ontalogy";
import OntologyOperations from "./comp/OntologyOperation";
import OntologySection from "./comp/RealTimeColl";

function PrimeEAM() {
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroPrimeEAM />
      <Ontalogy />
      <OntologySection />
      <OntologyOperations />
      <GlobalImpact />
      <AwardsSection />
      <GetStartedOntology />
      <Footer theme="dark" />
    </div>
  );
}

export default PrimeEAM;
