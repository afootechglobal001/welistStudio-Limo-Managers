import { useClickOutside } from "@/hooks/useClickOutside";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface SideDrawerProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  width?: string;
  closeOnOutsideClick?: boolean;
  title?: string;
  className?: string;
  additionalAction?: ReactNode;
  icon?: ReactNode;
}

export const CenterForm: React.FC<SideDrawerProps> = ({
  children,
  onClose,
  isOpen,
  width = "500px",
  closeOnOutsideClick = false,
  title,
  className = "",
  additionalAction,
  icon,
}) => {
  const sideDrawerRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    sideDrawerRef as React.RefObject<HTMLElement>,
    onClose,
    closeOnOutsideClick,
  );
  useScrollLock({ isOpen });

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed h-screen w-screen z-1001 animate-fade-in bg-black/50 transition-opacity duration-200 ease-in-out flex justify-center items-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Drawer */}
      <div
        ref={sideDrawerRef}
        className={`min-h-50  bg-(--body-bg) shadow-xl transition-transform duration-200 ease-in-out transform rounded-3xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${className}`}
        style={{ width }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/8 rounded-t-3xl">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-(--primary-color)  to-(--secondary-color) shadow-xl">
                {icon}
              </div>
            )}
            {title && (
              <h2 className="text-lg font-medium-custom text-(--title-color)">
                {title}
              </h2>
            )}
          </div>

          <div className="flex items-center gap-3">
            {additionalAction && (
              <div className="flex items-center gap-2">{additionalAction}</div>
            )}
            <button
              onClick={onClose}
              className="cursor-pointer border-none bg-linear-to-br from-(--primary-color)  to-(--secondary-color) bg-size-[200%_100%] bg-right text-white rounded-full text-xs p-2 px-3 whitespace-nowrap flex gap-1.5 hover:gap-3 duration-200"
            >
              <span className="flex items-center">
                <X size={16} />
              </span>
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-32px)] overflow-y-auto ">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
