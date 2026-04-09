import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Bell, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import { getInitials } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { Button } from "@/components/form";
import { Modal } from "@/components/dialog-box/Modal";
import useToggle from "@/hooks/useToggle";
import { SwitchCompany } from "./company-profile/switch/SwitchCompany";

export const Header = () => {
  const { clearAuth, onboardingCompleted } = useAuthStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const switchCompanyModalToggle = useToggle();

  const handleLogout = () => {
    clearAuth();
    router.push("/");
  };
  return (
    <>
      <header className="bg-white/8 w-full h-15 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {onboardingCompleted && (
            <>
              <div className="h-12 w-13 border border-white/20 bg-white/2 p-0.5 rounded-full overflow-hidden">
                <Image
                  src="/body-pix/1stClassicLogo.png"
                  alt="Vector"
                  className="w-full h-full object-cover rounded-full"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold-custom text-(--title-color)">
                  1st Classic Limo
                </h2>
                <span className="text-[12px]">COMP2026101500112</span>
              </div>

              <Button
                text="Switch"
                size="sm"
                onClick={() => switchCompanyModalToggle.open()}
              />
            </>
          )}
        </div>

        {/* //// user profile and settings, notification and FAQ icon */}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="h-10 w-10 text-(--text-color) hover:bg-white/30 rounded-full  flex items-center justify-center"
          >
            <Settings size={20} />
          </Link>
          <Link
            href="#"
            className="h-10 w-10 text-(--text-color) hover:bg-white/30 rounded-full  flex items-center justify-center"
          >
            <Bell size={20} />
          </Link>
          <div className="relative">
            {/* Trigger */}
            <div
              className="flex items-center gap-5 cursor-pointer  p-1 rounded-lg border-l border-white/20 pl-5"
              onClick={() => setOpen(!open)}
            >
              <div>
                <h2 className="text-(--title-color) text-sm font-medium-custom">
                  Mike Afolabi
                </h2>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <div className="text-white font-medium-custom w-10 h-10 text-xs bg-linear-to-br from-(--primary-color) to-(--secondary-color) rounded-full flex items-center justify-center">
                {getInitials(`Mike Afolabi`)}
              </div>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn z-50">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <Modal isOpen={switchCompanyModalToggle.isOpen}>
        <SwitchCompany
          onClose={switchCompanyModalToggle.close}
          isOpen={switchCompanyModalToggle.isOpen}
        />
      </Modal>
    </>
  );
};
