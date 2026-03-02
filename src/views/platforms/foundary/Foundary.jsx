import Footer from "../../../Layout/Footer";
import AwardsSection from "./comp/AwardSection";
import GetStartedOntology from "./comp/GetStartedOntology";
import GlobalImpact from "./comp/GlobalImpact";
import JsparkFoundry from "./comp/HeroSection";
import Ontalogy from "./comp/Ontalogy";
import OntologyOperations from "./comp/OntologyOperation";
import OntologySection from "./comp/RealTimeColl";

function Foundary() {
  return (
    <>
      <JsparkFoundry />
      <Ontalogy />
      <OntologySection />
      <OntologyOperations />
      <GlobalImpact />
      <AwardsSection />
      <GetStartedOntology />
      <Footer />
    </>
  );
}

export default Foundary;
