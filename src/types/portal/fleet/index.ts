export type FleetItems = {
  fleetId: string;
  categoryName: string;
  categoryCode: string;
  carMake: string;
  carImage: string;
  numOfPassenger: number;
  numOfLuggage: number;
  description: string;
  statusName: string;
};

export type fleetFilterType = {
  page: number;
  keyword: string;
  sort: string;
  order: "asc" | "desc" | null;
};
