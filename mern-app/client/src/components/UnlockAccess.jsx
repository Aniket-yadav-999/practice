import React from "react";

const UnlockAccess = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Unlock Full Access to A2G RAM Tool
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Subscribe to unlock unlimited assessments, advanced analytics,
          multi-SKU management, and team collaboration tools.
        </p>

        {/* Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg px-8 py-10">

          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Start Your Full Access Trial Today
          </h2>

          <div className="space-y-6">
            <input
              type="email"
              placeholder="Work Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 text-base
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 text-base
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-lg
                         hover:bg-blue-700 transition-all duration-300"
            >
              Get Started with Full Access
            </button>
          </div>
        </div>

        {/* Free Guide Button */}
        <div className="mt-12">
          <button
            className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700
                       px-6 py-3 rounded-lg text-lg font-semibold
                       hover:bg-green-50 transition-all duration-300"
          >
            📘 Download Our Free Guide: RAM Explained
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnlockAccess;
