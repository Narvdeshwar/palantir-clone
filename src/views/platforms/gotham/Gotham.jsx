import { jsparkVisionChaining } from "@/lib/data/gotham-chaining";
import Designed from "../aip/comp/Designed";
import JSPARKVisionSolution from "./comp/GothamSolution";
import JSPARKVisionQuote from "./comp/GothamQuote";
import HeroGotham from "./comp/HeroGotham";
import HeroSubheader from "./comp/HeroSubheader";
import AboutJSPARKVision from "./comp/AboutGotham.jsx";

function JSPARKVision() {
  return (
    <>
      <HeroGotham />
      <HeroSubheader />
      <JSPARKVisionSolution />
      <Designed data={jsparkVisionChaining} theme="dark" />
      <JSPARKVisionQuote />
      <AboutJSPARKVision />
    </>
  );
}

export default JSPARKVision;