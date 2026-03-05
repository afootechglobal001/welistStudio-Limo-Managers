interface StatRowProps {
  label: string;
  value: string | number;
  percentage: string;
}

export const FleetBookingsStatistics: React.FC<StatRowProps> = ({
  label,
  value,
  percentage,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 text-xs">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="font-medium-custom text-(--title-color)">{label}</p>
        </div>
        <p className="flex gap-4 ">
          <span className="text-(--title-color)">{value}</span>
          <span>{percentage}</span>
        </p>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-(--link-color) rounded-full"
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
};
