import React from "react";
const AssessmentProcess = () => {
  return (
    <div className="w-full flex justify-center bg-white py-12">
      <div className="max-w-5xl w-full bg-green-700 text-white rounded-2xl shadow-xl px-10 py-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">
          Assessment Process and Final Report
        </h2>

        {/* Points */}
        <div className="space-y-5 text-lg leading-relaxed">

          <div className="flex gap-4">
            <span className="text-2xl">→</span>
            <p>
              <strong>Real-Time Score Updates:</strong> As you answer each question,
              the ORAT automatically updates the <strong>provisional recyclability score</strong>.
              You can track your packaging’s classification in real-time via the results panel.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">→</span>
            <p>
              <strong>Interactive Assessment:</strong> You can <strong>modify your responses
              and continue the assessment</strong> at any time before finalizing.
              This allows you to explore how design changes impact recyclability outcomes immediately.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">→</span>
            <p>
              <strong>Final Result:</strong> Upon completing all questions, click the
              <strong> “Complete Analysis”</strong> button. A detailed, audit-grade report
              is generated, including classification rationale, component-level analysis,
              and recommendations, and is available for download in <strong>PDF format</strong>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssessmentProcess;
