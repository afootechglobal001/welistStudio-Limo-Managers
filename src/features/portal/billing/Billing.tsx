"use client";
import { CreditCard } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Billing() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
        }
        title="Billing"
        description="Manage your billing information, payment methods, and subscription details in one place. Ensure seamless transactions and uninterrupted service for your customers."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Manage your billing information, payment methods, and subscription
          details in one place. Ensure seamless transactions and uninterrupted
          service for your customers.
        </p>
      </section>
    </PortalWrapper>
  );
}
