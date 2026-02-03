import React from "react";

const FiveKeyAssessmentStages = () => {
  return (
    <section className="w-full flex justify-center px-4 py-24 bg-white">
      <div className="max-w-6xl w-full">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The 5 Key Assessment Stages
        </h2>
        <div className="h-px bg-gray-200 mb-8" />

        {/* Intro */}
        <p className="text-gray-700 max-w-4xl mb-16 leading-relaxed">
          The recyclability analysis within A2G ORAT follows the official RAM
          v1.1 structure and is conducted in five key stages. Each stage
          evaluates a specific phase of a packaging component’s recyclability
          journey, from material composition to end-use.
        </p>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-green-200" />

          {/* STEP 1 */}
          <div className="relative flex gap-8 mb-14">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                📦
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-6 w-full">
              <p className="text-green-700 font-semibold mb-1">Step 1</p>
              <h3 className="text-xl font-bold mb-3">Classification</h3>
              <p className="text-gray-700 leading-relaxed">
                Enter basic information (product name, image, configuration)
                and classify all components based on material type, format, and
                structure. This ensures the packaging is within the scope of UK
                Packaging EPR and RAM v1.1.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative flex gap-8 mb-14">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                🏠
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-6 w-full">
              <p className="text-green-700 font-semibold mb-1">Step 2</p>
              <h3 className="text-xl font-bold mb-3">Collection</h3>
              <p className="text-gray-700 leading-relaxed">
                Assesses the most likely collection method in the UK (e.g.
                kerbside, limited/take-back schemes, or not collected). It
                reflects the item's accessibility for recycling within current
                infrastructure.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative flex gap-8 mb-14">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                🔽
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-6 w-full">
              <p className="text-green-700 font-semibold mb-1">Step 3</p>
              <h3 className="text-xl font-bold mb-3">Sortation</h3>
              <p className="text-gray-700 leading-relaxed">
                Evaluates compatibility with existing sorting processes,
                including material detectability, component separability by
                hand, and effective directing to the correct waste stream.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative flex gap-8 mb-14">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                ⚙️
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-6 w-full">
              <p className="text-green-700 font-semibold mb-1">Step 4</p>
              <h3 className="text-xl font-bold mb-3">Reprocessing</h3>
              <p className="text-gray-700 leading-relaxed">
                Assesses whether the material can be effectively reprocessed
                into a secondary raw material, considering contamination,
                material yield, and compatibility with existing UK recycling
                systems.
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="relative flex gap-8">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                ♻️
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-6 w-full">
              <p className="text-green-700 font-semibold mb-1">Step 5</p>
              <h3 className="text-xl font-bold mb-3">End-Use</h3>
              <p className="text-gray-700 leading-relaxed">
                Evaluates the likelihood that recycled material is used in
                meaningful end-markets, ensuring the recycling process
                contributes to a circular economy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FiveKeyAssessmentStages;
