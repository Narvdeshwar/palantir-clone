import { appolloFeatures } from "@/lib/data/appollo-features";

export function FeatureOverview() {
  return (
    <>
      <section className="w-full px-10 lg:px-20 py-32">
        {/* Top Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <p className="text-xl font-light text-gray-800 leading-relaxed max-w-xl">
            With growing regulatory and compliance requirements, managing technical documentation is becoming increasingly complex.
          </p>

          <p className="text-xl font-light text-gray-800 leading-relaxed max-w-xl">
            OpsMind transforms fragmented technical documentation into a structured, intelligent knowledge platform tailored to your organization’s compliance and decision-making needs.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16">
          <div></div>
          {appolloFeatures.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-sm">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </div>

              <h3 className="text-lg font-medium text-gray-900">
                {feature.title}
              </h3>

              <span className="inline-block text-sm text-gray-600 border-b border-gray-300 pb-1">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-24">
          <button className="border border-black px-8 py-4 text-sm transition hover:bg-black hover:text-white cursor-pointer">
            Download the Whitepaper →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
}
