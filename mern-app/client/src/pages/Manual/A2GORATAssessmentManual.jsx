import React from "react";

const A2GORATAssessmentManual = () => {
  return (
    <section className="w-full flex justify-center px-4 py-24 bg-gray-50">
      <div className="max-w-5xl w-full">

        <div className="bg-white rounded-2xl shadow-lg p-10 border-b-4 border-green-700">

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-green-600 text-3xl">📖</div>
            <h1 className="text-3xl font-bold text-gray-900">
              A2G ORAT: Assessment Manual
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base">
            <p>
              This brief introduction to A2G’s Online Recyclability Assessment
              Tool (A2G ORAT) explains the methodology and process. You can
              access this information anytime by clicking the{" "}
              <span className="font-semibold">Manual</span> button at the top of
              the screen once logged in.
            </p>

            <p className="font-semibold text-gray-800">
              A2G ORAT evaluates packaging recyclability according to the{" "}
              <span className="font-bold">
                UK RAM v1.1 methodology
              </span>{" "}
              and provides a recyclability rating using a{" "}
              <span className="font-bold">
                Red, Amber, and Green (RAG) classification
              </span>{" "}
              to indicate the suitability of packaging for recycling.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default A2GORATAssessmentManual;
