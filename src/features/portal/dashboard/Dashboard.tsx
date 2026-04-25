"use client";
import {
  BarChart3,
  Car,
  ChartNoAxesCombined,
  CircleChevronDown,
  Gauge,
  MapPinCheck,
  Users,
} from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import DashboardStatCard from "./DashboardStatCard";
import { DASHBOARD_CARD_VARIANT } from "@/constants/portal/dashboard";
import RevenueBarChart from "./RevenueBarChart";
import FleetRevenueMatrix from "./FleetRevenueMatrix";
import { FleetBookingsStatistics } from "./FleetBookingsStatistics";
import { generateRandomFleetData } from "@/utils/generateRandomFleetData";
import WalletAndSubscriptionPrompt from "./WalletAndSubscriptionPrompt";
import { SortDirection, Table, TableColumn } from "@/components/table";
import {
  recentBookingsFilterType,
  recentBookingsType,
} from "@/types/portal/bookings";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/general-components/emptyState";
import { recentBookingsData } from "@/constants/portal/bookings";
import { NameAbbreviation } from "@/components/general-components/NameAbbreviation";
import { statusColour } from "@/constants/statusColor";
import { capitalizeWords, removeUnderscore } from "@/utils/helpers";
import Pagination from "@/components/table/Paginations";
const DEFAULT_FILTERS: recentBookingsFilterType = {
  page: 1,
  keyword: "",
  sort: "date",
  order: "desc",
};
export default function Dashboard() {
  const [filter, setFilter] = useState(DEFAULT_FILTERS);
  // Generate 30 days of random data
  const campaignReportDailyMatrix = generateRandomFleetData(15);
  const fleetRevenueMatrix = {
    sedan: 72456,
    sprinter: 53422,
    suv: 62678,
    limosine: 71234,
  };
  const columns: TableColumn<recentBookingsType>[] = useMemo(
    () => [
      {
        accessorKey: "bookingId",
        header: "Booking ID",
        sortable: true,
        cell: ({ row }) => (
          <div className="flex flex-col">
            <p className="text-(--title-color) text-sm font-medium-custom">
              {row.original.bookingId}
            </p>
            <p className="text-sm text-white/50">{row.original.date}</p>
          </div>
        ),
      },
      {
        id: "customerName",
        header: "Customer Name",
        sortable: true,
        cell: ({ row }) => {
          const customerName = row.original.user.name;
          return (
            <div className="flex items-center gap-3">
              <NameAbbreviation width={50} height={50} name={customerName} />
              <div className="flex flex-col">
                <p className="text-(--title-color) text-sm font-medium-custom">
                  {customerName}
                </p>
                <p className="text-sm text-white/50">{row.original.user.id}</p>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "vehicleName",
        header: "Vehicle Name",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-sm text-white/50">{row.original.vehicleName}</p>
        ),
      },
      {
        accessorKey: "pickupLocation",
        header: "Pickup Location",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-sm text-white/50">{row.original.pickupLocation}</p>
        ),
      },
      {
        accessorKey: "dropoffLocation",
        header: "Dropoff Location",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-sm text-white/50">
            {row.original.dropoffLocation}
          </p>
        ),
      },

      {
        accessorKey: "fare",
        header: "Fare",
        sortable: true,
        cell: ({ row }) => {
          const fare = row.original.fare;
          return (
            <div className="flex flex-col">
              <p className="text-(--title-color) text-lg font-medium-custom">
                {fare}
              </p>
              <p className="text-sm text-white/50 ">
                <MapPinCheck className="inline-block w-4 h-4 text-(--active-color)" />{" "}
                {row.original.miles} miles
              </p>
            </div>
          );
        },
      },
      {
        id: "status",
        header: "Status",
        sortable: true,
        cell: ({ row }) => {
          const statusName = row.original.status ?? "";
          const key = statusName.toLowerCase() as keyof typeof statusColour;
          const statusColor = statusColour[key] || {
            text: "text-gray-700",
            bg: "bg-gray-100",
          };

          return (
            <div className="flex items-center justify-center">
              <button
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium-custom rounded-full transition-all duration-200 hover:scale-105 ${statusColor.text} ${statusColor.bg}`}
              >
                {removeUnderscore(capitalizeWords(statusName))}
              </button>
            </div>
          );
        },
      },
    ],
    [],
  );
  const handleSorting = (
    key: keyof recentBookingsType,
    direction: SortDirection,
  ) => {
    setFilter((prev) => ({
      ...DEFAULT_FILTERS,
      ...prev,
      sort: key,
      order: direction,
    }));
  };
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Gauge className="h-8 w-8 text-white" />
          </div>
        }
        title={`Welcome back, Mike!`}
        description="Here's an overview of your dashboard. You can manage your limo fleet, track bookings, and oversee customer interactions all in one place."
        actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <section className="flex gap-5 w-full">
          <div className="w-[calc(100%-400px)] flex flex-col gap-5">
            <div className="w-full flex gap-5">
              {/* statistics card */}
              <DashboardStatCard
                value={43}
                title="Total Registered Vehicles"
                subtitle="8 Added This Month"
                icon={<Car className="h-7 w-7 text-white" />}
                variant={DASHBOARD_CARD_VARIANT.link}
              />
              <DashboardStatCard
                value={17}
                title="Active Drivers"
                subtitle="3 On Duty Now"
                icon={<Users className="h-7 w-7 text-white" />}
                variant={DASHBOARD_CARD_VARIANT.active}
              />
              <DashboardStatCard
                value={43}
                title="Pending Bookings"
                subtitle="8 Scheduled Today"
                icon={<Gauge className="h-7 w-7 text-white" />}
                variant={DASHBOARD_CARD_VARIANT.pending}
              />
              <DashboardStatCard
                value={43}
                title="Total Customers"
                subtitle="8 Added This Month"
                icon={<Users className="h-7 w-7 text-white" />}
                variant={DASHBOARD_CARD_VARIANT.active}
              />
            </div>

            <div className="w-full min-h-75 bg-white/5 rounded-lg flex flex-col items-start justify-start">
              <div className="p-4 border-b border-white/10 w-full flex gap-3 items-center text-sm">
                <ChartNoAxesCombined className="h-5 w-5 text-(--secondary-color)" />
                <p>Showing Matrix for</p>
                <button className="py-2 px-4 rounded-[20px] bg-white/10 flex gap-3 items-center text-xs cursor-pointer hover:bg-white/20 transition-colors duration-300">
                  <span> Last 30 Days </span>
                  <CircleChevronDown className="h-3 w-3 text-(--secondary-color)" />
                </button>
              </div>
              <div className="p-4 flex justify-between items-start w-full">
                <div>
                  Revenue from{" "}
                  <span className="font-medium text-(--secondary-color)">
                    February 04 2026
                  </span>{" "}
                  -{" "}
                  <span className="font-medium text-(--secondary-color)">
                    March 04 2026
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg w-full border border-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-300">
                    <div>
                      <h3 className="text-lg font-bold text-(title-color)">
                        $14,500,236.00
                      </h3>
                      <div>
                        <p className="text-(--text-color) text-xs">Revenue</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg w-full border border-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-300">
                    <div>
                      <h3 className="text-lg font-bold text-(title-color)">
                        $14,500,236.00
                      </h3>
                      <div>
                        <p className="text-(--text-color) text-xs">Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 w-full h-100">
                <RevenueBarChart DataSetMatrix={campaignReportDailyMatrix} />
              </div>
            </div>
          </div>

          <div className="w-100 flex flex-col justify-between gap-5">
            <div className="w-full bg-white/5 rounded-lg">
              <div className="p-4 border-b border-white/10 w-full flex gap-3 items-center text-sm">
                <Car className="h-5 w-5 text-(--secondary-color)" />
                <p>Fleet Booking</p>
              </div>
              <div className="w-full min-h-50 p-4 flex flex-col gap-4">
                <FleetBookingsStatistics
                  label="Luxury Sedan"
                  value={4}
                  percentage="75%"
                />
                <FleetBookingsStatistics
                  label="Sprinter Van"
                  value={2}
                  percentage="50%"
                />
                <FleetBookingsStatistics
                  label="SUV"
                  value={3}
                  percentage="60%"
                />
                <FleetBookingsStatistics
                  label="Limousine"
                  value={1}
                  percentage="25%"
                />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-lg">
              <div className="p-4 border-b border-white/10 w-full flex gap-3 items-center text-sm">
                <BarChart3 className="h-5 w-5 text-(--secondary-color)" />
                <p>Fleet Revenue Matrix</p>
              </div>
              <div className="w-full h-85 p-4">
                <FleetRevenueMatrix fleetRevenueMatrix={fleetRevenueMatrix} />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full min-h-75 bg-white/5 rounded-lg  text-gray-500">
          <Table
            columns={columns}
            data={recentBookingsData}
            noDataMessage={
              <EmptyState
                title="No Records Found"
                message="No records match your current filters. Try adjusting your search criteria"
              />
            }
            // onRowClick={handleRowClick}
            onSort={handleSorting}
            stickyColumns={{ last: true }}
            initialSortState={{
              sortKey: filter?.sort ?? null,
              sortDirection: filter?.order ?? null,
            }}
          />{" "}
          {recentBookingsData.length > 0 && (
            <div className="px-2 py-2 border-t border-white/10">
              <Pagination
                currentPage={1}
                totalPages={31}
                onPageChange={() => null}
              />
            </div>
          )}
        </div>
      </section>
    </PortalWrapper>
  );
}
