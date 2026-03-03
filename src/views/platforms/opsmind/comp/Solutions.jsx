export default function ExploreSolutions() {
  const leftSolutions = [
    "Multi-cloud, Multi-prem, Private SaaS, and Single Tenant Deployment",
    "Airgapped + Highside SaaS",
    "Microservice Orchestration",
  ];

  const rightSolutions = [
    "Continuous Security & Compliance",
    "Digital Transformation and DORA Metrics",
    "OpsMind for Edge",
  ];

  return (
    <>
      <section className="w-full text-white">
        {/* Explore Apollo Solutions */}
        <div className="px-6 lg:px-20 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* LEFT TITLE */}
            <h2 className="text-5xl lg:text-7xl font-light leading-tight text-white">
              Explore OpsMind Solutions
            </h2>

            {/* RIGHT SOLUTIONS ONLY */}
            <div className="space-y-16 max-w-3xl">
              <div className="space-y-10">
                {leftSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              <div className="space-y-10">
                {rightSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              {/* Demo Button */}
              <div className="pt-10 text-right">
                <button className="border border-white/20 px-8 py-3 text-sm hover:bg-white hover:text-black transition">
                  Watch the Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Federal CTA */}
        <div className="px-6 lg:px-20 py-32 text-center border-t border-white/5 bg-white/[0.02]">
          <h3 className="text-4xl lg:text-6xl font-light mb-10 max-w-4xl mx-auto text-white">
            Managing large-scale systems and teams? OpsMind is built for it.
          </h3>
          <button className="bg-white text-black px-10 py-4 text-sm hover:bg-gray-200 transition font-medium rounded-md">
            FedStart →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto opacity-10" />
    </>
  );
}

function SolutionRow({ label }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-6 text-lg text-gray-300">
      <span>{label}</span>
      <span className="text-xl text-white">→</span>
    </div>
  );
}
