import { ArrowRight } from "lucide-react";
import React from "react";

function OpsSharthiExplain() {
  return (
    <div className="w-[95%] mx-auto text-white">
      <p className="py-12 text-8xl">The OpsSharthi</p>
      <div className="flex gap-24 w-[90%] mx-auto mb-10">
        <div>
          <img
            src="https://www.palantir.com/assets/xrfr7uokpv1b/6ycgtn80LFNqchwVzgMDsT/4ae097a6ab1f14b6ff5785e59807fb44/Ontology_Simple.png?quality=70&width=1600"
            alt="OpsSharthi Illustration"
          />
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-2xl text-gray-100">
            Activate your assets and operations in a unified lifecycle management system.
          </p>
          <p className="text-xl text-gray-300">
            JSPARK OpsSharthi serves as the operational core of infrastructure and resource management. It connects assets, maintenance workflows, inventory, energy usage, and field operations into one coordinated environment — enabling teams to monitor conditions, schedule maintenance, optimize resources, and automate operational decisions across facilities and infrastructure networks.
          </p>
          <p
            className="
  relative w-fit flex items-center gap-2 text-lg cursor-pointer hover:text-gray-400
  after:absolute after:bottom-0 after:right-0 after:h-px after:w-full after:bg-white
  after:transition-all after:duration-300
  hover:after:w-0
"
          >
            Discover OpsSharthi <ArrowRight />
          </p>
        </div>
      </div>
      <hr className="w-[95%] mx-auto opacity-10" />
    </div>
  );
}

export default OpsSharthiExplain;
