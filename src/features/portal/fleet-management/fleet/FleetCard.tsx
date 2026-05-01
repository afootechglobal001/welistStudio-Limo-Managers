import Image from "next/image";
import { Car, UsersRound, Luggage, PencilLine } from "lucide-react";
import { FleetItems } from "@/types/portal/fleet";

type Props = {
  fleet: FleetItems;
};

export const FleetCard = ({ fleet }: Props) => {
  const {
    categoryName,
    categoryCode,
    carMake,
    carImage,
    numOfPassenger,
    numOfLuggage,
    description,
    statusName,
  } = fleet;
  return (
    <div className="flex gap-4 p-3.5 flex-col bg-(--primary-color) border border-white/15 rounded-2xl hover:bg-white/3 transition-all duration-300">
      <div className="relative flex border rounded-2xl border-white/20 overflow-hidden">
        <Image
          src={carImage}
          alt={carMake}
          className="w-full h-full object-cover rounded-2xl"
          width={0}
          height={0}
          unoptimized
        />

        <div
          className={`absolute mt-4 ml-4 px-3 py-1.5 text-xs font-medium rounded-full border text-white ${
            statusName === "ACTIVE"
              ? "bg-[#046804] border-green-500/30"
              : "bg-red-600/70 border-red-500/30"
          }`}
        >
          {statusName}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-2 pb-4 border-b border-white/20">
          <div className="flex w-fit items-center gap-1 rounded-4xl px-2 py-1 bg-white/3 border border-white/20">
            <Car className="h-5 w-5 text-(--secondary-color)" />
            <span className="text-sm font-medium-custom text-(--secondary-color)">
              {categoryName} ({categoryCode})
            </span>
          </div>

          <h2 className="flex items-center text-[23px] font-bold-custom text-(--title-color)">
            {carMake}
          </h2>

          <div className="w-full flex gap-2">
            <div className="flex px-2">
              <div className="flex gap-6 items-center justify-between">
                <div className="flex gap-1 items-center">
                  <UsersRound className="h-4 w-4 text-(--secondary-color)" />
                  <h4 className="text-[15px]">Passengers</h4>
                </div>

                <span className="py-0.5 px-2 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                  {numOfPassenger}
                </span>
              </div>
            </div>

            <div className="flex px-3 border-l border-white/20">
              <div className="flex gap-6 items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Luggage className="h-4 w-4 text-(--secondary-color)" />
                  <h4 className="text-[15px]">Luggage</h4>
                </div>

                <span className="py-0.5 px-2 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                  {numOfLuggage}
                </span>
              </div>
            </div>
          </div>
        </div>

        {description && (
          <p className="py-1 text-[15px] text-justify">{description}</p>
        )}

        <div className="flex pt-3 gap-5 items-center justify-between border-t border-white/20">
          <button className="cursor-pointer gap-2 border-none bg-linear-to-br from-(--primary-color) to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-[13px] h-8 px-4 flex items-center justify-center duration-200">
            <PencilLine size={14} />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
