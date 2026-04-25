export type recentBookingsType = {
  bookingId: string;
  user: {
    name: string;
    id: string;
  };
  vehicleName: string;
  pickupLocation: string;
  dropoffLocation: string;
  miles: number;
  pickupTime: string;
  status: string;
  fare: string;
  paymentStatus: string;
  date: string;
};

export type recentBookingsFilterType = {
  page: number;
  keyword: string;
  sort: string;
  order: "asc" | "desc" | null;
};
