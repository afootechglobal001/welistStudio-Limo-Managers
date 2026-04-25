"use client";
import { Webhook } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function ApiDocs() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Webhook className="h-8 w-8 text-white" />
          </div>
        }
        title="API Docs"
        description="Access our comprehensive API documentation to integrate Limo Managers with your existing systems and streamline your workflow."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Access our comprehensive API documentation to integrate Limo Managers
          with your existing systems and streamline your workflow.
        </p>
      </section>
    </PortalWrapper>
  );
}
