const explain = [
  {
    header: "OpsSharthi Language",
    subheader:
      "OpsSharthi unifies humans and AI in a single operational environment, enabling real-time monitoring, predictive insights, and automated responses across complex infrastructure — from utilities and transport to industrial and enterprise operations.",
    content: [
      {
        id: 1,
        title: "Unify the Data of the Enterprise",
        description:
          "OpsSharthi brings together diverse operational data — from IoT sensors, CCTV, SCADA, GIS, enterprise applications, and utilities — into a coherent operational model. These “objects and relationships” allow operators and AI agents to understand the full context of the infrastructure and interact securely with complex systems."
      },
      {
        id: 2,
        title: "Coordinate the Actions of the Enterprise",
        description:
          "OpsSharthi models all operational actions — from field service assignments and automated alerts to multi-step response workflows. Every action is traceable, governed, and executable at scale, ensuring consistent operations across control rooms and field teams."
      },
      {
        id: 3,
        title: "Encode the Logic of the Enterprise",
        description:
          "The platform captures operational logic, ranging from business rules and SOPs to predictive maintenance models and AI-assisted workflows. Logic evolves with patterns, anomalies, and historical behavior, enabling operations to move from reactive management to predictive, autonomous control."
      },
      {
        id: 4,
        title: "Govern Security and Compliance",
        description:
          "OpsSharthi enforces governance and security across data, logic, and actions. Role-based access, audit trails, and policy enforcement allow tens of thousands of users and AI agents to operate securely in multi-department environments.",
        img: "https://www.palantir.com/assets/xrfr7uokpv1b/QzyB81cjso0plPluPx0X0/5b2071bdae2f94e761b6e39736a4fbb0/Asset_93.png?quality=70&width=1600"
      }
    ]
  },

  // ----------------------------------------------
  {
    header: "OpsSharthi Engine",
    subheader: "Orchestrate operations at scale.",
    content: [
      {
        id: 1,
        title: "One unified operational reality.",
        description:
          "The platform handles millions of reads and writes across sensors, CCTV, enterprise applications, and field systems, maintaining real-time visibility, consistency, and reliability across all operational touchpoints."
      },
      {
        id: 2,
        title: "Activate your existing infrastructure.",
        description:
          "OpsSharthi seamlessly integrates with your current systems, coordinating data reads (e.g., state changes, monitoring feeds) and write operations (e.g., automated work-orders, dispatch actions, incident resolution) across data lakes, operational databases, and real-time platforms — all while enforcing security and governance at every layer."
      },
      {
        id: 3,
        title: "Operate in sync.",
        description:
          "Continuous synchronization ensures that decisions made in OpsSharthi are immediately reflected where actions take effect in the real world, keeping control rooms, field teams, and automated workflows aligned with minimal latency for faster, smarter operations.",
        video:
          "https://www.palantir.com/assets/xrfr7uokpv1b/6SnJjmQnRloLuqa1Wngeqm/c765141a58a6fa88e4e41a479a78ee2d/read-write.mp4"
      }
    ]
  },

  // ----------------------------------------------
  {
    header: "OpsSharthi Toolchain",
    subheader: "Turn OpsSharthi into the engine for building AI-powered operational tools.",
    content: [
      {
        id: 1,
        title: "Turn OpsSharthi into a development backend.",
        description:
          "The OpsSharthi SDK (OSDK) and developer tools empower teams to build AI-driven operational applications and workflows across industries — from smart city management and industrial automation to enterprise facilities and large-scale transport operations."
      },
      {
        id: 2,
        title: "Create tools for humans and AI agents alike.",
        description:
          "The platform acts as a “tool factory,” enabling developers to define reusable tools that can query operational data, execute multi-step workflows, or trigger automated responses — all within a secure, governed environment."
      },
      {
        id: 3,
        title: "Capture and share expertise across teams.",
        description:
          "Operators, engineers, and analysts can encode domain knowledge directly into the platform. These reusable tools power coordinated workflows and automated operations, reducing duplication, accelerating development, and ensuring consistency across all operational processes.",
        img: "https://www.palantir.com/assets/xrfr7uokpv1b/5lD6CIYE2ijjOwVesGtMCi/464ee2b376a7a6e19f52f4a3a761c298/Asset_96.png?quality=70&width=1600"
      }
    ]
  }
];




export default function OntologyExplainPage() {
  return (
    <div className="px-10 py-16 w-[95%] mx-auto space-y-32">

      {explain.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* LEFT SIDE – TITLE */}
          <div className="sticky top-28 h-fit">
            <h1 className="text-6xl font-semibold tracking-tight">
              {section.header}
            </h1>
          </div>

          {/* RIGHT SIDE – BIG CARD */}
          <div>
            <div className="p-10 rounded-3xl border shadow-md bg-white space-y-12">

              {/* SUBHEADER */}
              <p className="text-xl text-gray-700 leading-relaxed">
                {section.subheader}
              </p>

              <hr className="border-gray-300" />

              {/* CONTENT BLOCKS */}
              {section.content.map((item, idx) => (
                <div key={item.id} className="space-y-4">

                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* IMAGE / VIDEO SUPPORT */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full rounded-xl mt-4"
                    />
                  )}

                  {item.video && (
                    <video
                      src={item.video}
                      controls
                      className="w-full rounded-xl mt-4"
                    />
                  )}

                  {/* Divider except after last item */}
                  {idx !== section.content.length - 1 && (
                    <hr className="border-gray-300 my-8" />
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      ))}

    </div>
  );
}

