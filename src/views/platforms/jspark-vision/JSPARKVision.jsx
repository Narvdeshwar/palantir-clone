import { jsparkVisionChaining } from "@/lib/data/jspark-vision-chaining";
import Designed from "../opsunity/comp/Designed";
import JSPARKVisionSolution from "./comp/JSPARKVisionSolution";
import JSPARKVisionQuote from "./comp/JSPARKVisionQuote";
import HeroJSPARKVision from "./comp/HeroJSPARKVision";
import HeroSubheader from "./comp/HeroSubheader";
import AboutJSPARKVision from "./comp/AboutJSPARKVision.jsx";
import Footer from "@/layout/Footer";

function JSPARKVision() {
  return (
    <div className="bg-bg-app text-text-primary min-h-screen">
      <HeroJSPARKVision />
      <HeroSubheader />
      <JSPARKVisionSolution />
      <Designed data={jsparkVisionChaining} theme="dark" />
      <JSPARKVisionQuote />
      <AboutJSPARKVision />
      <Footer theme="dark" />
    </div>
  );
}

export default JSPARKVision;
