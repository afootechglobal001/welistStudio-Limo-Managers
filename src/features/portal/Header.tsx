import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Bell, LogOut, Settings } from "lucide-react";
import { getInitials } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants/portal/navlinks";
export const Header = () => {
  const { clearAuth } = useAuthStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    clearAuth();
    router.push("/");
  };
  const [activeLink, setActiveLink] = useState("Dashboard");
  return (
    <header className="bg-white/8 w-full h-15 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <nav>
          <ul className="flex items-center gap-6 text-white">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.name}>
                <li
                  className={`transition-colors duration-300 text-(--text-color)  whitespace-nowrap  flex items-center justify-start gap-1 cursor-pointer hover:bg-white/10 px-4 py-2.5 rounded-lg ${
                    activeLink === link.name ? "bg-white/20 text-white" : ""
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.icon && (
                    <link.icon
                      size={16}
                      className="inline-block mr-1 text-(--secondary-color)"
                    />
                  )}
                  <span>{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
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
  );
};
