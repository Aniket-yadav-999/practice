import React from "react";

const StepperProgress = ({ steps, currentStep, progress }) => {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="h-2 w-full rounded-full bg-gray-200" />
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
        <span className="absolute right-0 -top-6 text-sm font-medium text-green-600">
          {progress}% complete
        </span>
      </div>

      {/* Stepper */}
      <div className="flex items-start justify-between gap-3">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div
              key={step.id}
              className={`flex-1 rounded-xl px-4 py-4 text-center transition-all duration-300
                ${
                  isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {/* Step Number */}
              <div
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                  ${
                    isActive
                      ? "bg-white text-green-600"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                {step.id}
              </div>

              {/* Title */}
              <h4
                className={`text-sm font-semibold ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </h4>

              {/* Subtitle */}
              <p
                className={`mt-1 text-xs ${
                  isActive ? "text-green-100" : "text-gray-400"
                }`}
              >
                {step.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperProgress;
