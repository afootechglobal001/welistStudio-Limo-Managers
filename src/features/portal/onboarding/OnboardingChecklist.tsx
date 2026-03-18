"use client";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/form";

interface Step {
  title: string;
  description: string;
  handleNextStep?: () => void;
}

interface OnboardingChecklistProps {
  steps: Step[];
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function OnboardingChecklist({
  steps,
  currentStep,
  handleNextStep,
}: OnboardingChecklistProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={index}
            className={`p-6 rounded-lg flex justify-between items-center gap-4 transition-all
            ${isActive ? "bg-white/10 border border-white/10" : "bg-white/5"}`}
          >
            <div className="flex gap-4 items-start">
              {/* Status Icon */}
              <div className="mt-1">
                {isCompleted ? (
                  <CheckCircle className="text-green-500" size={22} />
                ) : (
                  <div className="w-6 h-6 rounded-full border border-gray-500" />
                )}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-xl font-medium-custom">{step.title}</h2>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>

            {/* Button */}
            <Button
              text={isCompleted ? "Completed" : "Continue"}
              size="lg"
              disabled={!isActive}
              onClick={() => handleNextStep(stepNumber)}
            />
          </div>
        );
      })}
    </div>
  );
}
