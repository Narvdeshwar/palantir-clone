export default function DevOpsStrategy() {
  return (
    <>
      <section className="w-full bg-white px-6 lg:px-20 py-24">
        <div className="w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-10">
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
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-14 max-w-xl">
            <div className="space-y-4 border-b pb-10">
              <h3 className="text-lg font-600">
                Run your intelligence wherever your operations live.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From data centers to edge locations and secure private networks, OpsMind provides one unified system to operate, automate, and optimize every workflow.
              </p>
            </div>

            <div className="space-y-4 border-b pb-10">
              <h3 className="text-lg font-600">
                Transition from manual operations to autonomous execution — on your terms.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Define workflows, SOPs, alerts, and policies, and OpsMind continuously monitors systems, makes decisions, and keeps operations running smoothly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-600">
                Make every operational decision secure and accountable.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With role-based access, continuous monitoring, and automated documentation, OpsMind maintains compliance while teams work seamlessly together.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <p className="text-5xl w-3/4 text-center font-400">
            " We are solving a real operational challenge by creating an intelligent system that makes processes think, respond, and act automatically "
          </p>
          <p className="text-sm text-gray-500">
            ↳ Mike Younkers, Senior Director of Engineering, Government
            Solutions at Cisco
          </p>
          <button className="border border-black px-8 py-4 text-sm transition bg-black text-white rounded-md hover:bg-white hover:text-black cursor-pointer">
            Watch the OpsMind customer Testimonial →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
}
