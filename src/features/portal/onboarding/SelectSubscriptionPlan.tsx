"use client";
import {
  RefreshCcw,
  X,
  Car,
  CalendarCheck,
  Users,
  Map,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import PricingCard from "./PricingCard";
import { useState } from "react";
import {
  SUBSCRIPTION_PLAN,
  SUBSCRIPTION_PRICING_ANNUALLY,
  SUBSCRIPTION_PRICING_MONTHLY,
  subscriptionPlans,
} from "@/constants/portal/onboarding";

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
    handleCompleteSteps(4); // Proceed to the next step
  };
  const [activePlan, setActivePlan] = useState(SUBSCRIPTION_PLAN.MONTHLY);
  const subscriptionPlanCard =
    activePlan === SUBSCRIPTION_PLAN.MONTHLY
      ? SUBSCRIPTION_PRICING_MONTHLY
      : SUBSCRIPTION_PRICING_ANNUALLY;
  const planDuration =
    activePlan === SUBSCRIPTION_PLAN.MONTHLY
      ? { duration: "Monthly", abbr: "mo" }
      : { duration: "Annually", abbr: "yr" };

  return (
    <>
      <section className="fixed h-screen w-screen">
        {/* header */}
        <div className="flex items-center justify-between h-16.25 px-4 border-b border-white/20 bg-(--primary-color-light) ">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-(--primary-color)  to-(--secondary-color) shadow-xl">
              <RefreshCcw className="w-4 h-4" />
            </div>

            <h2 className="text-lg font-medium-custom text-(--title-color)">
              Select Subscription Plan
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="cursor-pointer border-none bg-linear-to-br from-(--primary-color)  to-(--secondary-color) bg-size-[200%_100%] bg-right text-white rounded-full text-xs p-2 px-3 whitespace-nowrap flex gap-1.5 hover:gap-3 duration-200"
            >
              <span className="flex items-center">
                <X size={16} />
              </span>
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-65px)] overflow-y-auto bg-(--body-bg)">
          <div className="h-full w-full py-15 px-5 flex flex-col gap-10 items-center">
            <div className="flex gap-2 w-220 flex-col items-center justify-center">
              <h2 className="text-5xl font-bold-custom text-(--title-color) text-center leading-15">
                Check Out Awesome Subscription Plans, And Get Started
              </h2>
              <p className="text-lg text-(--secondary-color)">
                Choose which package is best for you.
              </p>
            </div>

            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/2 p-1 shadow-sm">
              {subscriptionPlans.map((plan, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePlan(plan.value)}
                  className={`rounded-full px-6 py-2 text-sm font-medium shadow cursor-pointer
                  ${activePlan === plan.value ? " bg-white text-gray-900 hover:bg-white/90" : "bg-none text-gray-600 hover:bg-white/3"} `}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            <div className="w-270 flex items-center justify-between gap-5">
              {/* Basic */}

              <PricingCard
                title={subscriptionPlanCard[0].title}
                price={subscriptionPlanCard[0].price}
                planDuration={planDuration}
                features={[
                  {
                    text: "Up to 5 Vehicles",
                    icon: <Car size={18} />,
                    active: true,
                  },
                  {
                    text: "Booking Management",
                    icon: <CalendarCheck size={18} />,
                    active: true,
                  },
                  {
                    text: "Basic Customer Records",
                    icon: <Users size={18} />,
                    active: true,
                  },
                  {
                    text: "Advanced Reports",
                    icon: <BarChart3 size={18} />,
                    active: false,
                  },
                  {
                    text: "Live Trip Tracking",
                    icon: <Map size={18} />,
                    active: false,
                  },
                  {
                    text: "Auto Backup",
                    icon: <ShieldCheck size={18} />,
                    active: false,
                  },
                ]}
                action={handleProvidePaymentGatewayDetails}
              />

              {/* Standard */}
              <PricingCard
                title={subscriptionPlanCard[1].title}
                price={subscriptionPlanCard[1].price}
                planDuration={planDuration}
                features={[
                  {
                    text: "Up to 20 Vehicles",
                    icon: <Car size={18} />,
                    active: true,
                  },
                  {
                    text: "Advanced Booking System",
                    icon: <CalendarCheck size={18} />,
                    active: true,
                  },
                  {
                    text: "Customer Management",
                    icon: <Users size={18} />,
                    active: true,
                  },
                  {
                    text: "Performance Dashboard",
                    icon: <BarChart3 size={18} />,
                    active: true,
                  },
                  {
                    text: "Trip Monitoring",
                    icon: <Map size={18} />,
                    active: true,
                  },
                  {
                    text: "Auto Backup",
                    icon: <ShieldCheck size={18} />,
                    active: false,
                  },
                ]}
                action={handleProvidePaymentGatewayDetails}
              />

              {/* Advanced */}
              <PricingCard
                title={subscriptionPlanCard[2].title}
                price={subscriptionPlanCard[2].price}
                planDuration={planDuration}
                features={[
                  {
                    text: "Unlimited Vehicles",
                    icon: <Car size={18} />,
                    active: true,
                  },
                  {
                    text: "Smart Booking Automation",
                    icon: <CalendarCheck size={18} />,
                    active: true,
                  },
                  {
                    text: "Full Customer CRM",
                    icon: <Users size={18} />,
                    active: true,
                  },
                  {
                    text: "Advanced Analytics & Reports",
                    icon: <BarChart3 size={18} />,
                    active: true,
                  },
                  {
                    text: "Live GPS Tracking",
                    icon: <Map size={18} />,
                    active: true,
                  },
                  {
                    text: "Secure Cloud Backup",
                    icon: <ShieldCheck size={18} />,
                    active: true,
                  },
                ]}
                action={handleProvidePaymentGatewayDetails}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
