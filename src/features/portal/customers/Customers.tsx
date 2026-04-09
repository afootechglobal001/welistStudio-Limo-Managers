"use client";
import { UserRound } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Customers() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <UserRound className="h-8 w-8 text-white" />
          </div>
        }
        title="Customers"
        description="Keep track of your customers, their preferences, and ride history in one place. Provide a seamless and premium experience with efficient customer management.."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Keep track of your customers, their preferences, and ride history in
          one place. Provide a seamless and premium experience with efficient
          customer management.
        </p>
      </section>
    </PortalWrapper>
  );
}
