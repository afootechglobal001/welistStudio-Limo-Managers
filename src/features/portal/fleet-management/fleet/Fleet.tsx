"use client";
import { Car, Luggage, PencilLine, UsersRound } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";
import { FleetFilters } from "./FilterSelect";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/dialog-box/Modal";
import useToggle from "@/hooks/useToggle";
import { FleetRegistration } from "./FleetRegistration";

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
            <FleetFilters viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>

          <div className="p-4">
            <div className="w-full grid grid-cols-4 gap-5">
              <div className="flex gap-4 p-3.5 flex-col bg-(--primary-color) border border-white/15 rounded-2xl hover:bg-white/1 hover:border-(--secondary-color-light) transition-all duration-300">
                <div className="relative flex border rounded-2xl border-white/20 overflow-hidden">
                  <Image
                    src="/body-pix/fleet.jpg"
                    alt="Suv"
                    className="w-full h-full object-cover rounded-2xl"
                    width={0}
                    height={0}
                    unoptimized
                  />

                  <div className="absolute mt-4 ml-4 px-3 py-1.5 text-xs font-medium rounded-full border text-white bg-[#046804] border-green-500/30">
                    ACTIVE
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col gap-2 pb-4 border-b border-white/20">
                    <div className="flex w-fit items-center gap-1 rounded-4xl px-2 py-1 bg-white/3 border border-white/20">
                      <Car className="h-5 w-5 text-(--secondary-color)" />
                      <span className="text-sm font-medium-custom text-(--secondary-color)">
                        Electric Class Sedan (SED)
                      </span>
                    </div>

                    <h2 className="flex items-center text-[23px] font-bold-custom text-(--title-color)">
                      Mercedes S-Class 2024
                    </h2>

                    <div className="w-full flex gap-2">
                      <div className="flex px-2">
                        <div className="flex gap-6 items-center justify-between cursor-pointer">
                          <div className="flex gap-1 items-center">
                            <UsersRound className="h-4 w-4 text-(--secondary-color)" />
                            <h4 className="text-[15px]">Passengers</h4>
                          </div>

                          <span className="py-0.5 px-2 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                            2
                          </span>
                        </div>
                      </div>

                      <div className="flex px-3 border-l border-white/20">
                        <div className="flex gap-6 items-center justify-between cursor-pointer">
                          <div className="flex gap-1 items-center">
                            <Luggage className="h-4 w-4 text-(--secondary-color)" />
                            <h4 className="text-[15px]">Luggage</h4>
                          </div>

                          <span className="py-0.5 px-2 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                            4
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="py-1 text-[15px] text-justify">
                    Up to 3 passengers / 3 suitcases
                  </p>

                  <div className="flex pt-3 gap-5 items-center justify-between border-t border-white/20">
                    <button className="cursor-pointer gap-2 border-none bg-linear-to-br from-(--primary-color) to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-[13px] h-8 px-4 flex items-center justify-center duration-200">
                      <PencilLine size={14} />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
