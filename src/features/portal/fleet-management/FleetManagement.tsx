"use client";
import { Car } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function FleetManagement() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Car className="h-8 w-8 text-white" />
          </div>
        }
        title="Fleet Management"
        description="Here is an overview of your fleet management. You can manage your fleet, update vehicle details, and customize your settings."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Manage your fleet, update vehicle details, and customize your
          settings.
        </p>
      </section>
    </PortalWrapper>
  );
}
