import React from "react";

const MakePackagingCircular = () => {
  return (
    <section className="w-full bg-green-800 py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Make Your Packaging Circular Again
        </h2>

        {/* Points */}
        <div className="space-y-6">

          {[
            "Obtain complimentary access to our online assessment platform, including your initial packaging evaluation at no cost.",
            "Identify design modifications that can enhance the recyclability of your packaging within UK systems.",
            "Model expected recyclability outcomes based on the UK Recycling Assessment Methodology (RAM v1.1) to support compliance and strategic decisions.",
            "Gain insight into how different packaging materials and types are processed through UK collection, sorting, and recycling infrastructures.",
            "Learn how your packaging aligns with the latest standards and criteria established by DEFRA, WRAP, and the UK Extended Producer Responsibility regulations.",
            "Receive updates on developments in recyclability standards, testing protocols, and material-specific regulations."
          ].map((text, index) => (
            <div
              key={index}
              className="bg-green-700 rounded-xl px-6 py-5 flex items-start gap-4 shadow-sm"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
              </div>

              {/* Text */}
              <p className="text-white text-base leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition inline-flex items-center gap-3">
            Access the Platform &amp; Get Your Free Assessment
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default MakePackagingCircular;
