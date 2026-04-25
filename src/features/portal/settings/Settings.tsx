"use client";
import { Settings2 } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Settings() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Settings2 className="h-8 w-8 text-white" />
          </div>
        }
        title="Settings"
        description="Manage your account settings, preferences, and integration options to customize your Limo Managers experience."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Customize your Limo Managers experience by managing your account
          settings, preferences, and integration options.
        </p>
      </section>
    </PortalWrapper>
  );
}
