"use client";
import { Car, ChevronDown, Grid3X3, List } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";
import { useState } from "react";
import { Modal } from "@/components/dialog-box/Modal";
import useToggle from "@/hooks/useToggle";
import { FleetRegistration } from "./FleetRegistration";
import { FLEET_LIST } from "@/constants/portal/fleetdata";
import { FleetCard } from "./FleetCard";
import { FleetTable } from "./FleetTable";

export default function Fleet() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const fleetRegistrationModalToggle = useToggle();

  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Car className="h-8 w-8 text-white" />
          </div>
        }
        title="Fleet Management"
        description="Here is an overview of your fleet categories. You can manage your fleet categories, update vehicle fleet categories."
        actions={
          <PageSearch
            placeHolder="Search Here"
            actionBtn
            buttonText="Add New Fleet"
            onButtonClick={() => {
              fleetRegistrationModalToggle.open();
            }}
          />
        }
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2 bg-white/2 border border-white/20 rounded-xl">
          <div className="border-b border-white/20 rounded-xl rounded-b-none text-sm text-(--title-color) p-4 flex items-center gap-2 bg-white/4">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <div className="relative inline-flex items-center rounded-[10px] bg-(--primary-color-light) border border-gray-200">
                  <select className="appearance-none pl-5 pr-10 py-2.5 rounded-[10px] bg-(--primary-color-light) text-gray-200 focus:outline-none cursor-pointer">
                    <option value="all">All Fleet Categories</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="limo">Stretch Limo</option>
                    <option value="van">Sprinter Van</option>
                  </select>

                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--secondary-color) pointer-events-none" />
                </div>

                <div className="relative inline-flex items-center rounded-[10px] bg-(--primary-color-light) border border-gray-200">
                  <select className="appearance-none pl-5 pr-10 py-2.5 rounded-[10px] bg-(--primary-color-light) text-gray-200 focus:outline-none cursor-pointer">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="available">Available</option>
                    <option value="maintenance">Maintenance</option>
                  </select>

                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--secondary-color) pointer-events-none" />
                </div>
              </div>

              {/* VIEW MODE */}
              <div className="flex items-center bg-white/2 border border-white/20 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-black shadow-md"
                      : "text-gray-200"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 text-(--secondary-color)" />
                  Grid
                </button>

                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white text-black shadow-md"
                      : "text-gray-200"
                  }`}
                >
                  <List className="w-4 h-4 text-(--secondary-color)" />
                  List
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-4 gap-5">
                {FLEET_LIST.map((fleetItems) => (
                  <FleetCard key={fleetItems.fleetId} fleet={fleetItems} />
                ))}
              </div>
            ) : (
              <FleetTable data={FLEET_LIST} />
            )}
          </div>
        </div>
      </section>

      <Modal isOpen={fleetRegistrationModalToggle.isOpen}>
        <FleetRegistration
          onClose={fleetRegistrationModalToggle.close}
          isOpen={fleetRegistrationModalToggle.isOpen}
        />
      </Modal>
    </PortalWrapper>
  );
}
