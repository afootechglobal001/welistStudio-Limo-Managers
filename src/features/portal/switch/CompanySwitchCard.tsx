import Image from "next/image";
import { ChevronRight } from "lucide-react";

type CompanySwitchCardProps = {
  name: string;
  companyId: string;
  logo: string;
  onClick?: () => void;
  active?: boolean;
};

export const CompanySwitchCard: React.FC<CompanySwitchCardProps> = ({
  name,
  companyId,
  logo,
  onClick,
  active = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3 border rounded-[14px] cursor-pointer hover:bg-white/5 hover:border-(--secondary-color-light) transition
        ${
          active
            ? "bg-(--primary-color-light) border-(--secondary-color-light)"
            : "border-white/18 hover:bg-white/5"
        }
      `}
    >
      {/* Left: Logo + Info */}
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-13 border border-white/18 bg-white/2 p-0.5 rounded-full overflow-hidden">
          <Image
            src={logo}
            alt={`${name} company logo`}
            className="w-full h-full object-cover rounded-full"
            width={0}
            height={0}
            unoptimized
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-medium-custom text-(--title-color)">
            {name}
          </h3>
          <span className="text-[13px] text-gray-400">{companyId}</span>
        </div>
      </div>

      {/* Right: Arrow */}
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  );
};
