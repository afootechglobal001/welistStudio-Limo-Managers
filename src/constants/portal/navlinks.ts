import {
  Gauge,
  UserStar,
  Building,
  Car,
  Users,
  CalendarCheck,
  Calculator,
  DollarSign,
  UserRound,
  BarChart3,
  CreditCard,
  Settings2,
  FileText,
  Webhook,
  LogOut,
} from "lucide-react"; // 👈 import icons

export const NAV_LINKS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Gauge,
  },
  {
    name: "My Profile",
    href: "/profile",
    icon: UserStar,
  },
];

export const SIDEBAR_TOP_LINKS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Gauge,
  },
  {
    name: "Company Profile",
    href: "/company-profile",
    icon: Building,
  },
  {
    name: "Fleet Management",
    href: "/fleet",
    icon: Car,
  },
  {
    name: "Drivers Management",
    href: "/drivers",
    icon: Users,
  },
  {
    name: "Bookings",
    href: "/bookings",
    icon: CalendarCheck,
  },
  {
    name: "Mileage Calculator",
    href: "/mileage-calculator",
    icon: Calculator,
  },
  {
    name: "Pricing Engine",
    href: "/pricing",
    icon: DollarSign,
  },
  {
    name: "Customers",
    href: "/customers",
    icon: UserRound,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    name: "Billing & Subscriptions",
    href: "/billing",
    icon: CreditCard,
  },
  {
    name: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
  {
    name: "API & Webhooks",
    href: "/billing",
    icon: Webhook,
  },
];

export const SIDEBAR_BOTTOM_LINKS = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings2,
  },
  {
    name: "Log-out",
    href: "#",
    icon: LogOut,
  },
];
