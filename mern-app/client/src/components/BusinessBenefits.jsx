import React from "react";

const features = [
  {
    title: "Regulation-Aligned Methodology",
    desc: "Built on the core criteria and decision logic outlined in RAM — developed by DEFRA and WRAP.",
    icon: "✅",
    color: "border-green-500",
  },
  {
    title: "Clear Recyclability Ratings",
    desc: "Each configuration receives a Red, Amber, or Green grade, indicating its compatibility with UK recycling infrastructure.",
    icon: "🚦",
    color: "border-blue-500",
  },
  {
    title: "Detailed, Component-Level Insights",
    desc: "Dissects your packaging into individual components (labels, caps, films) and assesses each based on material type.",
    icon: "🧩",
    color: "border-green-500",
  },
  {
    title: "Multi-SKU Assessment Capabilities",
    desc: "Easily assess recyclability across multiple product variants and configurations, tailored for diverse portfolios.",
    icon: "📦",
    color: "border-blue-500",
  },
  {
    title: "Collaborative Workflow",
    desc: "Assign specific packaging components to team members or external suppliers for streamlined data input and review.",
    icon: "🤝",
    color: "border-green-500",
  },
  {
    title: "Compliance-Ready Documentation",
    desc: "Automatically generate audit-grade recyclability reports, ready for compliance filings or internal audits.",
    icon: "📄",
    color: "border-blue-500",
  },
  {
    title: "Sustainability Insights",
    desc: "Uncover data-backed recommendations to enhance packaging design and support long-term sustainability goals.",
    icon: "💡",
    color: "border-green-500",
  },
  {
    title: "Downloadable, Shareable Reports",
    desc: "Export comprehensive RAG-graded reports in PDF format for use in regulatory submissions.",
    icon: "⬇️",
    color: "border-blue-500",
  },
];

const BusinessBenefits = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-900">
          How It Helps Your Business
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-16">
          The A2G RAM Tool is a powerful solution built on the logic of the official
          <strong> Recycling Assessment Methodology (RAM)</strong> to ensure full
          alignment with the UK Packaging EPR framework.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-t-4 ${item.color}
                          p-7 shadow-sm transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-2xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessBenefits;
