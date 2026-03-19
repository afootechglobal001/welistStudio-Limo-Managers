"use client";
import { RefreshCcw, X } from "lucide-react";

//////////////////////////////////////////////////////////////////////////////
type SelectSubscriptionPlanProps = {
  onClose: () => void;
  handleCompleteSteps: (step: number) => void;
};

export function SelectSubscriptionPlan({
  onClose,
  handleCompleteSteps,
}: SelectSubscriptionPlanProps) {
  const handleProvidePaymentGatewayDetails = () => {
    // Handle form submission logic here, e.g., send data to backend
    onClose(); // Close the drawer after submission
    handleCompleteSteps(3); // Proceed to the next step
  };
  return (
    <>
      <section className="fixed h-screen w-screen">
        {/* header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/8">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-(--primary-color)  to-(--secondary-color) shadow-xl">
              <RefreshCcw />
            </div>

            <h2 className="text-lg font-medium-custom text-(--title-color)">
              Select Subscription Plan
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleProvidePaymentGatewayDetails}
              className="cursor-pointer border-none bg-linear-to-br from-(--primary-color)  to-(--secondary-color) bg-size-[200%_100%] bg-right text-white rounded-full text-xs p-2 px-3 whitespace-nowrap flex gap-1.5 hover:gap-3 duration-200"
            >
              <span className="flex items-center">
                <X size={16} />
              </span>
              <span>Close</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
