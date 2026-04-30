import { Grid3X3, List, ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type FilterSelectProps = {
  icon: React.ReactNode;
  options: Option[];
  onChange?: (value: string) => void;
};

const FilterSelect: React.FC<FilterSelectProps> = ({
  icon,
  options,
  onChange,
}) => {
  return (
    <div className="relative inline-flex items-center rounded-[10px] transition-all bg-(--primary-color-light) border border-gray-200 hover:bg-white/8">
      <select
        className="appearance-none pl-5 pr-10 py-2.5 rounded-[10px] w-auto bg-(--primary-color-light) text-gray-200 focus:outline-none cursor-pointer"
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-gray-200 cursor-pointer"
          >
            {opt.label}
          </option>
        ))}
      </select>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-(--text-color)">
        {icon}
      </div>
    </div>
  );
};

type FleetFiltersProps = {
  onCategoryChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
};

export const FleetFilters: React.FC<FleetFiltersProps> = ({
  onCategoryChange,
  onStatusChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-2">
        <FilterSelect
          icon={<ChevronDown className="w-4 h-4 text-(--secondary-color)" />}
          onChange={onCategoryChange}
          options={[
            { label: "All Fleet Categories", value: "all" },
            { label: "Sedan", value: "sedan" },
            { label: "SUV", value: "suv" },
            { label: "Stretch Limo", value: "limo" },
            { label: "Sprinter Van", value: "van" },
          ]}
        />

        <FilterSelect
          icon={<ChevronDown className="w-4 h-4 text-(--secondary-color)" />}
          onChange={onStatusChange}
          options={[
            { label: "All Status", value: "all" },
            { label: "Active", value: "active" },
            { label: "Available", value: "available" },
            { label: "Maintenance", value: "maintenance" },
          ]}
        />
      </div>

      <div className="flex items-center bg-white/2 border border-white/20 rounded-full p-1">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-all cursor-pointer ${
            viewMode === "grid"
              ? "bg-white text-black shadow-md scale-[1.02]"
              : "text-gray-200 hover:bg-white/3"
          }`}
        >
          <Grid3X3 className="w-4 h-4 text-(--secondary-color)" />
          Grid
        </button>

        <button
          onClick={() => onViewModeChange("list")}
          className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-all cursor-pointer ${
            viewMode === "list"
              ? "bg-white text-black shadow-md scale-[1.02]"
              : "text-gray-200 hover:bg-white/3"
          }`}
        >
          <List className="w-4 h-4 text-(--secondary-color)" />
          List
        </button>
      </div>
    </div>
  );
};
