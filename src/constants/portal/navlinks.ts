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
    onboarded: true,
  },
  {
    name: "Onboarding",
    href: "/onboarding",
    icon: UserStar,
    onboarded: false,
  },
  {
    name: "Company Profile",
    href: "/company-profile",
    icon: Building,
    onboarded: true,
  },
  {
    name: "Fleet Management",
    href: "/fleet",
    icon: Car,
    onboarded: true,
  },
  {
    name: "Drivers Management",
    href: "/drivers",
    icon: Users,
    onboarded: true,
  },
  {
    name: "Bookings",
    href: "/bookings",
    icon: CalendarCheck,
    onboarded: true,
  },
  {
    name: "Mileage Calculator",
    href: "/mileage-calculator",
    icon: Calculator,
    onboarded: true,
  },
  {
    name: "Pricing Engine",
    href: "/pricing",
    icon: DollarSign,
    onboarded: true,
  },
  {
    name: "Customers",
    href: "/customers",
    icon: UserRound,
    onboarded: true,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
    onboarded: true,
  },
  {
    name: "Billing & Subscriptions",
    href: "/billing",
    icon: CreditCard,
    onboarded: true,
  },
  {
    name: "Invoices",
    href: "/invoices",
    icon: FileText,
    onboarded: true,
  },
  {
    name: "API & Webhooks",
    href: "/billing",
    icon: Webhook,
    onboarded: true,
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
    action: "logout",
    icon: LogOut,
  },
];
