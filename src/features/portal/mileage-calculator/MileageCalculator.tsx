"use client";
import { Calculator } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function MileageCalculator() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Calculator className="h-8 w-8 text-white" />
          </div>
        }
        title="Mileage Calculator"
        description="Calculate and track vehicle mileage with our easy-to-use calculator. Keep records accurate and up-to-date for maintenance and tax purposes."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Calculate and track vehicle mileage with our easy-to-use calculator.
          Keep records accurate and up-to-date for maintenance and tax purposes.
        </p>
      </section>
    </PortalWrapper>
  );
}
