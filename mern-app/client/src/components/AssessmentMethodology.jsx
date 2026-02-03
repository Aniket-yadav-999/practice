import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Classification",
    color: "bg-blue-600",
    text: "Identify and classify all packaging components by material type, format, and structure.",
    tags: ["Material ID", "Component Analysis", "EPR Scope"],
  },
  {
    id: 2,
    title: "Collection",
    color: "bg-orange-500",
    text: "Assess collection method accessibility within UK waste management infrastructure.",
    tags: ["Kerbside Collection", "Take-back Schemes", "Coverage Analysis"],
  },
  {
    id: 3,
    title: "Sortation",
    color: "bg-purple-600",
    text: "Evaluate compatibility with existing sorting processes and material detectability.",
    tags: ["Detection Systems", "Separation", "Contamination Risk"],
  },
  {
    id: 4,
    title: "Reprocessing",
    color: "bg-green-700",
    text: "Review material compatibility with technical recycling processes and barriers.",
    tags: ["Technical Recycling", "Coating Compatibility", "Multi-material"],
  },
  {
    id: 5,
    title: "Application",
    color: "bg-indigo-700",
    text: "Determine usability of recycled output in closed-loop or open-loop applications.",
    tags: ["Closed-loop", "Alternative Uses", "Quality Assessment"],
  },
];

const AssessmentMethodology = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-900">
          The 5-Step Assessment Methodology
        </h2>
        <p className="text-base text-center text-gray-600 mt-3 mb-14">
          Click on any step to see detailed methodology and component assessment criteria.
        </p>

        {/* Accordion */}
        <div className="space-y-5">
          {steps.map((step) => {
            const isOpen = openId === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-xl overflow-hidden border border-gray-200 
                            shadow-sm transition-all duration-300
                            ${isOpen ? "shadow-md scale-[1.01]" : ""}`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : step.id)}
                  className={`w-full flex items-center justify-between 
                              px-6 py-4 text-white text-lg font-medium
                              ${step.color}`}
                >
                  <span className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-full bg-white/20 
                                     flex items-center justify-center text-sm font-semibold">
                      {step.id}
                    </span>
                    {step.title}
                  </span>

                  <span
                    className={`text-2xl transition-transform duration-300
                                ${isOpen ? "rotate-180" : ""}`}
                  >
                    ⌃
                  </span>
                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                              ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-white px-6 py-5">
                      <p className="text-base text-gray-700 mb-4">
                        {step.text}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-4 py-1.5 rounded-full 
                                       bg-gray-100 text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AssessmentMethodology;
