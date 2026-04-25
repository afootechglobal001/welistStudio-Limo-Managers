"use client";
import { DollarSign } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Pricing() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
        }
        title="Pricing"
        description="View our flexible pricing plans and choose the perfect option for your limo business. Upgrade or downgrade at any time with no hidden fees."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          View our flexible pricing plans and choose the perfect option for your
          limo business. Upgrade or downgrade at any time with no hidden fees.
        </p>
      </section>
    </PortalWrapper>
  );
}
