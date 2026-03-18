"use client";
import { UserStar } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import CircularProgress from "./CircularProgress";
import OnboardingStepper from "./OnboardingStepper";
import OnboardingChecklist from "./OnboardingChecklist";
import {
  ONBOARDING_CHECKLIST,
  ONBOARDING_STEPS,
} from "@/constants/portal/onboarding";
import { useState } from "react";
import { FeedbackDialog } from "@/components/feedback-dialog";
import { useRouter } from "next/navigation";
import useToggle from "@/hooks/useToggle";
import { Modal } from "@/components/dialog-box/Modal";
import { ProvideCompanyDetails } from "./ProvideCompanyDetails";

export default function Onboarding() {
  const router = useRouter();
  const onboardingSuccessToggle = useToggle();
  const onboardingModalToggle = useToggle();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = ONBOARDING_STEPS.length;

  const handleCompleteSteps = (step: number) => {
    setProgress(step * (100 / totalSteps));
    setCurrentStep(step + 1);
    if (step === totalSteps) {
      onboardingSuccessToggle.open();
    }
  };
  const handleNextStep = (step: number) => {
    if (step === 1) {
      onboardingModalToggle.open();
    }
  };

  const gotoDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <UserStar className="h-8 w-8 text-white" />
          </div>
        }
        title={`Hello Mike!`}
        description="Welcome to onboarding and compliance setup. Let's get your account ready to manage your limo fleet and ensure you meet all regulatory requirements."
        actions={<CircularProgress percentage={progress} />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <div className="p-6 bg-white/5 rounded-lg flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-medium-custom">Onboarding Steps</h2>
            <p className="text-gray-400">
              To get started, please complete the following steps to set up your
              account and ensure compliance with industry regulations.
            </p>
          </div>
          <OnboardingStepper
            steps={ONBOARDING_STEPS}
            currentStep={currentStep}
          />
        </div>
        <div className="w-full">
          <OnboardingChecklist
            steps={ONBOARDING_CHECKLIST}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
          />
        </div>
      </section>
      <Modal isOpen={onboardingModalToggle.isOpen}>
        <ProvideCompanyDetails
          onClose={onboardingModalToggle.close}
          isOpen={onboardingModalToggle.isOpen}
          handleCompleteSteps={handleCompleteSteps}
        />
      </Modal>
      <FeedbackDialog
        variant="success"
        title="Onboarding Successful"
        text="Your onboarding process has been completed successfully. You can now access your dashboard and start managing your limo fleet."
        btnText="Go to Dashboard"
        loadingText="Processing..."
        onClick={gotoDashboard}
        isOpen={onboardingSuccessToggle.isOpen}
      />
    </PortalWrapper>
  );
}
