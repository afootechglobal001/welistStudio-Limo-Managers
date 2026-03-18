"use client";

import { Button } from "@/components/form";
import { SubscriptionIcon } from "@/components/icons/SubscriptionIcon";
import { DollarSignIcon } from "lucide-react";

export default function WalletAndSubscriptionPrompt() {
  return (
    <div className="p-4 flex gap-3 justify-between items-center">
      <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-(--secondary-hover-color) flex items-center justify-center text-white">
            <DollarSignIcon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Wallet Balance</p>
            <p className="text-lg font-medium-custom">$150.00</p>
          </div>
        </div>
        <Button text="Top Up" size="sm" />
      </div>

      <div className="flex gap-3 items-center  p-3 bg-white/5 rounded-lg">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-(--secondary-hover-color) flex items-center justify-center text-white">
            <SubscriptionIcon />
          </div>
          <div>
            <p className="text-sm text-gray-400">Subscription</p>
            <p className="text-lg font-medium-custom">Expiring in 45 days</p>
          </div>
        </div>
        <Button text="Renew" size="sm" />
      </div>
    </div>
  );
}
