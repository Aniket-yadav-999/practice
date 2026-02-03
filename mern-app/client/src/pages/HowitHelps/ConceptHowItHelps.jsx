import React from "react";

const ConceptHowItHelps = () => {
  return (
    <section className="w-full flex justify-center px-4 py-24 bg-gray-50">
      <div className="max-w-7xl w-full">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Concept: How the A2G Tool Helps You
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <div className="text-2xl mb-4">✅</div>
            <h3 className="text-lg font-semibold mb-3">
              Regulation-Aligned Methodology
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built on the core criteria and decision logic outlined in RAM
              v1.1—developed by DEFRA and WRAP—this tool ensures full alignment
              with the UK Packaging EPR framework and supports upcoming
              modulated fee compliance requirements.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="text-2xl mb-4">🚦</div>
            <h3 className="text-lg font-semibold mb-3">
              Clear Recyclability Ratings
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each packaging configuration receives a Red, Amber, or Green
              recyclability grade—clearly indicating its compatibility with
              current UK recycling infrastructure and helping guide fee
              modulation and PCS submissions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <div className="text-2xl mb-4">🧩</div>
            <h3 className="text-lg font-semibold mb-3">
              Detailed, Component-Level Insights
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dissects your packaging into its individual components—such as
              bottles, labels, caps, or films—and assesses each based on
              material type, attachment, separability, and format.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="text-2xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-3">
              Designed for Multi-SKU Complexity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Easily assess recyclability across multiple product variants and
              configurations. Tailored for brands with diverse packaging
              portfolios, especially in FMCG and retail sectors.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <div className="text-2xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-3">
              Collaborative Assessment Workflow
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Assign specific packaging components to team members or external
              suppliers for data input and review, enabling streamlined
              collaboration across departments and value chains.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="text-2xl mb-4">📄</div>
            <h3 className="text-lg font-semibold mb-3">
              Compliance-Ready Documentation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatically generate audit-aligned recyclability reports,
              aligned with the UK Packaging Waste (Data Reporting) Regulations
              2023, ready for compliance filings or internal audits.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <div className="text-2xl mb-4">💡</div>
            <h3 className="text-lg font-semibold mb-3">
              Sustainability Insights You Can Act On
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Uncover data-backed recommendations to enhance packaging design,
              improve recyclability scores, and support long-term circularity
              and sustainability goals.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="text-2xl mb-4">⬇️</div>
            <h3 className="text-lg font-semibold mb-3">
              Downloadable, Shareable Reports
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Export comprehensive RAG-graded reports in PDF format for use in
              regulatory submissions, internal communications, or stakeholder
              presentations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConceptHowItHelps;
