import React from "react";
import { useSelector } from "react-redux";

const StepperComponent = ({ totalSteps }) => {
  const currentStep = useSelector((state) => state.form.step);

  return (
    <div className="flex justify-center mb-4">
      {[...Array(totalSteps).keys()].map((step) => (
        <div
          key={step}
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${
            step + 1 === currentStep
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          {step + 1}
        </div>
      ))}
    </div>
  );
};

export default StepperComponent;
