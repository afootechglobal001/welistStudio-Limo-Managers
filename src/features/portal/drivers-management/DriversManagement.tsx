"use client";
import { Users } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function DriversManagement() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Users className="h-8 w-8 text-white" />
          </div>
        }
        title="Drivers Management"
        description="Get a complete overview of your driver management system. Easily manage drivers, update their information, and customize settings to suit your needs."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Manage your drivers, update their details, and customize your
          settings.
        </p>
      </section>
    </PortalWrapper>
  );
}
