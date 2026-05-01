import { FleetCategoryItems } from "@/types/portal/fleet-management";
import { Car, PencilLine } from "lucide-react";

type Props = {
  fleetCategory: FleetCategoryItems;
  onViewVehicles: (id: string) => void;
};
export const FleetCategoryCard = ({ fleetCategory, onViewVehicles }: Props) => {
  const {
    categoryId,
    categoryName,
    categoryCode,
    categoryDescription,
    statusName,
    numOfVehicles,
  } = fleetCategory;
  return (
    <div className="flex gap-4 p-4 bg-(--primary-color) border border-white/15 rounded-xl hover:bg-white/3 transition-all duration-300">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-(--title-color)">
              {categoryName}{" "}
              <span className="text-[15px]">({categoryCode})</span>
            </h2>
            <p className="text-[12px]">{categoryDescription}</p>
          </div>

          <div className="flex gap-2">
            <span
              className={`flex items-center px-3 h-8 py-1.5 w-fit text-xs font-medium rounded-full border ${
                statusName === "ACTIVE"
                  ? "text-(--active-color) bg-green-500/10 border-green-500/30"
                  : "text-red-400 bg-red-500/10 border-red-500/30"
              }`}
            >
              {statusName}
            </span>

            <button
              title="Click to edit fleet category"
              className="cursor-pointer gap-2 border-none bg-linear-to-br from-(--primary-color) to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-[13px] h-8 px-4 flex items-center justify-center duration-200"
            >
              <PencilLine size={14} />
              Edit
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-between pt-3 border-t border-white/20">
          <div className="w-full flex px-2.5 py-2 bg-white/2 border border-white/20 rounded-[10px]">
            <div
              title="Click to view fleets"
              className="w-full flex gap-6 items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <Car className="h-6 w-6 p-1 text-(--secondary-color) bg-white/8 border border-white/20 rounded-lg" />
                <h4 className="text-[14px]">Vehicles</h4>
              </div>

              <div className="flex gap-2">
                <span className="py-1 px-3 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                  {numOfVehicles}
                </span>

                <button
                  onClick={() => onViewVehicles(categoryId)}
                  className="py-1 px-3 font-medium-custom text-(--secondary-color) text-sm bg-(--primary-color) hover:underline border border-white/20 rounded-lg cursor-pointer"
                >
                  {numOfVehicles === 0 ? "Add Vehicles" : "View Vehicles"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
