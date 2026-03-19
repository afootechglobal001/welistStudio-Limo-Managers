"use client";

import { CenterForm } from "@/components/center-form";
import { Building2 } from "lucide-react";
import { CompanySwitchCard } from "./CompanySwitchCard";

//////////////////////////////////////////////////////////////////////////////
type SwitchCompanyProps = {
  onClose: () => void;
  isOpen: boolean;
};

export function SwitchCompany({ onClose, isOpen }: SwitchCompanyProps) {
  return (
    <>
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
              <CompanySwitchCard
                name="1st Classic Limo"
                companyId="COMP2026101500112"
                logo="/body-pix/1stClassicLogo.png"
                //onClick={}
                active
              />

              <CompanySwitchCard
                name="CityOne Limo"
                companyId="COMP2026101500113"
                logo="/body-pix/CityOneLogo.jpg"
                //onClick={}
              />

              <CompanySwitchCard
                name="4-Seasons Limo"
                companyId="COMP2026101500114"
                logo="/body-pix/4-SeasonsLogo.jpg"
                //onClick={}
              />
            </div>
          </div>
        </section>
      </CenterForm>
    </>
  );
}
