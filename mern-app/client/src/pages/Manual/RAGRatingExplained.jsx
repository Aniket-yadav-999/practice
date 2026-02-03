import React from "react";

const RAGRatingExplained = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          RAG Rating Explained (RAM v1.1 Grading Logic)
        </h2>

        <div className="h-px w-full bg-gray-200 mb-6"></div>

        {/* Intro */}
        <p className="text-gray-600 mb-10 leading-relaxed">
          The tool assigns a Red–Amber–Green (RAG) rating to each component
          assessed. These ratings indicate the recyclability performance of the
          packaging at each stage of the assessment, in line with the UK RAM v1.1
          framework.
        </p>

        {/* GREEN */}
        <div className="mb-8 rounded-xl bg-green-50 border-l-8 border-green-600 shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
              ✓
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Green
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-green-700">Green:</span>{" "}
                Indicates <strong>no significant recyclability barriers</strong>.
                The item is widely collected, sortable, and reprocessable into
                high-quality recyclate. Suitable for closed-loop
                manufacturings.
              </p>
            </div>
          </div>
        </div>

        {/* AMBER */}
        <div className="mb-8 rounded-xl bg-amber-50 border-l-8 border-amber-500 shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
              !
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Amber
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-amber-700">Amber:</span>{" "}
                Reflects <strong>minor limitations in recyclability</strong>.
                The component is still recyclable, but may result in moderate
                material loss or reduced quality. Typically supports open-loop
                or, in some cases, closed-loop reuse.
              </p>
            </div>
          </div>
        </div>

        {/* RED */}
        <div className="rounded-xl bg-red-50 border-l-8 border-red-600 shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
              ✕
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                Red
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-700">Red:</span>{" "}
                Signifies <strong>major recyclability issues</strong>. This may
                include lack of collection infrastructure, failure in
                sortation, or technical incompatibility with reprocessing.
                These items often end up in landfill or incineration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RAGRatingExplained;
