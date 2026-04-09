"use client";

import { useState } from "react";
import { CenterForm } from "@/components/center-form";
import { Building2 } from "lucide-react";
import { CompanySwitchCard } from "./CompanySwitchCard";
import { SWITCH_COMPANY } from "@/constants/portal/swtichcompany";

//////////////////////////////////////////////////////////////////////////////
type SwitchCompanyProps = {
  onClose: () => void;
  isOpen: boolean;
};

export function SwitchCompany({ onClose, isOpen }: SwitchCompanyProps) {
  const [activeCompanyId] = useState<string>(SWITCH_COMPANY[0].companyId);

  return (
    <CenterForm
      onClose={onClose}
      isOpen={isOpen}
      title="Select Company"
      icon={<Building2 className="w-4 h-4" />}
      width="550px"
    >
      <section className="flex flex-col gap-5">
        <div className="p-7 pt-7 flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            {SWITCH_COMPANY.map((company) => (
              <CompanySwitchCard
                key={company.companyId}
                name={company.name}
                companyId={company.companyId}
                logo={company.logo}
                active={activeCompanyId === company.companyId}
                onClick={onClose}
              />
            ))}
          </div>
        </div>
      </section>
    </CenterForm>
  );
}
