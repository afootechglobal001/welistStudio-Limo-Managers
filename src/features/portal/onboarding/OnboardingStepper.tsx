"use client";

import React from "react";
import { Check } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function OnboardingStepper({
  steps,
  currentStep,
}: StepperProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <React.Fragment key={index}>
            <div
              className={`flex gap-3 items-center p-3 rounded-lg transition-all duration-300
              ${isActive ? "bg-white/10 shadow-lg" : "bg-white/5"}`}
            >
              {/* Step circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                      ? "bg-(--secondary-hover-color)"
                      : "bg-gray-600"
                }`}
              >
                {isCompleted ? <Check size={18} /> : stepNumber}
              </div>

              {/* Text */}
              <div>
                <p className="text-lg font-medium-custom">{step.title}</p>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>

            {/* connector line */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-[6px] mx-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    stepNumber < currentStep ? "bg-green-500 w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
