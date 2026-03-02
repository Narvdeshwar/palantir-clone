import { HeroSubheaderData } from "../../../../lib/data/hero-subheaderdata";
import HeroSubCompHeader from "./subcomp/HeroSubCompHeader";

function HeroSubheader() {
  return (
    <div className="">
      {HeroSubheaderData.map((item) => (
        <HeroSubCompHeader items={item} />
      ))}
    </div>
  );
}

export default HeroSubheader;
