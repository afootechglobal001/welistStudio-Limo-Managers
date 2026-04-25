import { Clock, Car, Users } from "lucide-react";

export const COMPANY_LIST = [
  {
    name: "1st Classic Limos",
    logo: "/body-pix/1stClassicLogo.png",
    location: "LA, USA",
    website: "1stclassiclimos.com",
    email: "info@1stclassiclimos.com",
    stats: [
      { label: "Pending Reservations", value: 7, icon: Clock },
      { label: "Fleets", value: 10, icon: Car },
      { label: "Drivers", value: 10, icon: Users },
    ],
  },
  {
    name: "CityOne Limo",
    logo: "/body-pix/CityOneLogo.jpg",
    location: "LA, USA",
    website: "cityonelimo.com",
    email: "info@cityonelimo.com",
    stats: [
      { label: "Pending Reservations", value: 5, icon: Clock },
      { label: "Fleets", value: 8, icon: Car },
      { label: "Drivers", value: 6, icon: Users },
    ],
  },
  {
    name: "4-Seasons Limo",
    logo: "/body-pix/4-SeasonsLogo.jpg",
    location: "LA, USA",
    website: "4-seasonslimos.com",
    email: "info@4-seasonslimos.com",
    stats: [
      { label: "Pending Reservations", value: 9, icon: Clock },
      { label: "Fleets", value: 12, icon: Car },
      { label: "Drivers", value: 11, icon: Users },
    ],
  },
];
