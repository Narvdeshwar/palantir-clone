export default function DevOpsStrategy() {
  return (
    <>
      <section className="w-full px-6 lg:px-20 py-24 text-white">
        <div className="w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-10 text-white">
            Reliable decisions depend on trusted documentation →
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-16">
            <div className="max-w-lg">
              <img
                src="https://www.palantir.com/assets/xrfr7uokpv1b/5D1jVUnJAVlgMm7Zomx8IA/6ca3a22f5eab819978fb15d7eca3b56c/shutterstock_2102832148.jpg?quality=70&width=1600"
                alt="Abstract DevOps Visual"
                className="w-full rounded-xl opacity-80"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-14 max-w-xl">
            <div className="space-y-4 border-b border-white/10 pb-10">
              <h3 className="text-lg font-600 text-white">
                Run your intelligence wherever your operations live.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                From data centers to edge locations and secure private networks, OpsMind provides one unified system to operate, automate, and optimize every workflow.
              </p>
            </div>

            <div className="space-y-4 border-b border-white/10 pb-10">
              <h3 className="text-lg font-600 text-white">
                Transition from manual operations to autonomous execution — on your terms.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Define workflows, SOPs, alerts, and policies, and OpsMind continuously monitors systems, makes decisions, and keeps operations running smoothly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-600 text-white">
                Make every operational decision secure and accountable.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                With role-based access, continuous monitoring, and automated documentation, OpsMind maintains compliance while teams work seamlessly together.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <p className="text-5xl w-3/4 text-center font-400 text-white">
            " We are solving a real operational challenge by creating an intelligent system that makes processes think, respond, and act automatically "
          </p>
          <p className="text-sm text-gray-500">
            ↳ Mike Younkers, Senior Director of Engineering, Government
            Solutions at Cisco
          </p>
          <button className="border border-white px-8 py-4 text-sm transition bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer font-medium">
            Watch the OpsMind customer Testimonial →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto opacity-10" />
    </>
  );
}
