import React from "react";

const AssessmentWorkflow = () => {
  return (
    <section className="w-full flex justify-center px-4 py-24 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h1 className="text-5xl font-bold text-green-700 leading-tight mb-8">
            A2G’s Online
            <br />
            Recyclability
            <br />
            Assessment Tool
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-xl">
            The platform evaluates packaging recyclability based on the
            <span className="font-semibold"> UK’s RAM v1.1 guidelines</span>,
            providing clear
            <span className="font-semibold">
              {" "}Red, Amber, Green (RAG) ratings
            </span>{" "}
            and detailed component-level reports to support UK EPR compliance.
          </p>

          {/* Highlight Box */}
          <div className="bg-green-50 border-l-4 border-green-600 rounded-md p-6 mb-10 max-w-xl">
            <p className="text-green-800 font-semibold mb-2">
              Your journey starts now:{" "}
              <span className="font-bold">
                The first assessment is completely free.
              </span>
            </p>
            <p className="text-green-700">
              Register, complete the guided questionnaire, and quickly identify
              recyclability and design improvements for UK EPR.
            </p>
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-4 rounded-lg shadow-md">
            Start Your Free Recyclability Assessment
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 max-w-md w-full">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Assessment Workflow
          </h3>

          <div className="space-y-6">

            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  1. Registration & Data Input
                </p>
                <p className="text-gray-600 text-sm">
                  Users register and complete a guided questionnaire about
                  their packaging components.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  2. Collaboration (Optional)
                </p>
                <p className="text-gray-600 text-sm">
                  Delegate data input to colleagues or external partners
                  for streamlined collection.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  3. RAM v1.1 Evaluation
                </p>
                <p className="text-gray-600 text-sm">
                  The tool applies the RAM v1.1 methodology to evaluate
                  each component.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  4. Detailed RAG Report
                </p>
                <p className="text-gray-600 text-sm">
                  Generates a detailed recyclability report with Red,
                  Amber, or Green ratings.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AssessmentWorkflow;
