import React from "react";
import { DASHBOARD_CARD_VARIANT } from "@/constants/portal/dashboard";
import { formatNumberValues } from "@/utils/helpers";

interface DashboardStatCardProps {
  value: number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: keyof typeof DASHBOARD_CARD_VARIANT | string; // Allow custom variants or colors
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  value,
  title,
  subtitle,
  icon,
  variant = DASHBOARD_CARD_VARIANT.text,
}) => {
  const textColor =
    variant === DASHBOARD_CARD_VARIANT.text
      ? "text-(--text-color)"
      : variant === DASHBOARD_CARD_VARIANT.link
        ? "text-(--link-color)"
        : variant === DASHBOARD_CARD_VARIANT.active
          ? "text-(--active-color)"
          : variant === DASHBOARD_CARD_VARIANT.pending
            ? "text-(--pending-color)"
            : variant; // Allow custom colors

  const borderColor =
    variant === DASHBOARD_CARD_VARIANT.text
      ? "border-(--text-color)"
      : variant === DASHBOARD_CARD_VARIANT.link
        ? "border-(--link-color)"
        : variant === DASHBOARD_CARD_VARIANT.active
          ? "border-(--active-color)"
          : variant === DASHBOARD_CARD_VARIANT.pending
            ? "border-(--pending-color)"
            : variant; // Allow custom colors

  return (
    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg w-full border border-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-300">
      <div>
        <h3 className="text-4xl font-bold">{formatNumberValues(value)}</h3>

        <div>
          <p className="text-(--title-color)">{title}</p>
          {subtitle && <p className={`${textColor} text-xs`}>{subtitle}</p>}
        </div>
      </div>
      {icon && (
        <div
          className={`w-12 h-12 border ${borderColor} flex items-center justify-center rounded-lg bg-white/20`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default DashboardStatCard;
