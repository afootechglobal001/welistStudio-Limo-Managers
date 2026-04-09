"use client";
import { BarChart3 } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Reports() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
        }
        title="Reports"
        description="Gain valuable insights into your operations through detailed reports on trips, customers, and performance, enabling you to enhance service quality and business growth."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Gain valuable insights into your operations through detailed reports
          on trips, customers, and performance, enabling you to enhance service
          quality and business growth.
        </p>
      </section>
    </PortalWrapper>
  );
}
