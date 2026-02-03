import React from "react";

const AssessmentComplete = () => {
  return (
    <section className="bg-sky-50 py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-14">
          Your Recyclability Assessment is Complete!
        </h1>

        {/* Result Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">

          <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center justify-center gap-2">
            📦 Final Overview
          </h2>

          <div className="text-left space-y-4 text-gray-800 text-base">
            <p>
              <strong>Product Name:</strong> Shampoo Bottle
            </p>
            <p>
              <strong>Recyclability Status:</strong>{" "}
              <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                ♻️ Recyclable
              </span>
            </p>
            <p>
              <strong>Recyclability Class:</strong> B (Moderately recyclable)
            </p>
            <p>
              <strong>Recyclable Plastic Content:</strong> 72%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-700"
                style={{ width: "72%" }}
              />
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <h2 className="text-3xl font-semibold text-gray-900 mt-20 mb-10">
          What Would You Like to Do Next?
        </h2>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <button className="bg-green-700 text-white text-lg font-semibold py-4 rounded-xl shadow-md
                             hover:bg-green-800 hover:-translate-y-1 transition-all duration-300">
            ⬇️ Download Your Report (PDF)
          </button>

          <button className="bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow-md
                             hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
            💼 Subscribe for Full Access
          </button>

          <button className="border-2 border-green-600 text-green-700 text-lg font-semibold py-4 rounded-xl
                             hover:bg-green-50 hover:-translate-y-1 transition-all duration-300">
            📘 Download Our Free Guide: RAM Explained
          </button>

          <button className="border-2 border-blue-600 text-blue-600 text-lg font-semibold py-4 rounded-xl
                             hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
            📞 Need More Support? Talk to an Expert
          </button>

        </div>
      </div>
    </section>
  );
};

export default AssessmentComplete;
