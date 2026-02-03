import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
          How It Works: 3 Simple Steps
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 
                              flex items-center justify-center 
                              text-3xl font-semibold text-green-700">
                1
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Define Your Product and Packaging
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Enter key details on format, materials, and separability, in
              accordance with the requirements set out in{" "}
              <strong>RAM</strong>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 
                              flex items-center justify-center 
                              text-3xl font-semibold text-green-700">
                2
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Collaborate and Input Component-Level Data
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Assign data collection responsibilities to internal team members
              or external suppliers for gathering material-level inputs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 
                              flex items-center justify-center 
                              text-3xl font-semibold text-green-700">
                3
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Complete Assessment and Generate Reports
            </h3>

            <p className="text-gray-600 leading-relaxed">
              The system assigns a <strong>Red, Amber, or Green (RAG)</strong>{" "}
              status and generates a structured report suitable for{" "}
              <strong>PCS submissions</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
