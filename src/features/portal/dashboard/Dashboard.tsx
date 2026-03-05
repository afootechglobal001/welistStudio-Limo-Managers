"use client";
import {
  BarChart3,
  Car,
  ChartNoAxesCombined,
  CircleChevronDown,
  Gauge,
  Users,
} from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import DashboardStatCard from "./DashboardStatCard";
import { DASHBOARD_CARD_VARIANT } from "@/constants/portal/dashboard";
import RevenueBarChart from "./RevenueBarChart";
import FleetRevenueMatrix from "./FleetRevenueMatrix";
import { FleetBookingsStatistics } from "./FleetBookingsStatistics";
const generateRandomFleetData = (days = 30) => {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Random counts for each fleet type
    const sedan = Math.floor(Math.random() * 6); // 0-5
    const sprinter = Math.floor(Math.random() * 5); // 0-4
    const suv = Math.floor(Math.random() * 4); // 0-3
    const limosine = Math.floor(Math.random() * 2); // 0-1

    // Amount could be a weighted sum of fleet counts
    const amount = sedan * 500 + sprinter * 700 + suv * 800 + limosine * 1200;

    data.push({
      lastUpdatedDate: date.toISOString(),
      amount,
      sedan,
      sprinter,
      suv,
      limosine,
    });
  }

  return data;
};
export default function Dashboard() {
  // const campaignReportDailyMatrix = [
  //   {
  //     lastUpdatedDate: "2025-06-23T10:30:00Z",
  //     amount: 2186,
  //     sedan: 2,
  //     sprinter: 1,
  //     suv: 3,
  //     limosine: 0,
  //   },
  //   {
  //     lastUpdatedDate: "2025-06-24T10:30:00Z",
  //     amount: 3186,
  //     sedan: 3,
  //     sprinter: 2,
  //     suv: 1,
  //     limosine: 1,
  //   },
  //   {
  //     lastUpdatedDate: "2025-06-25T10:30:00Z",
  //     amount: 4186,
  //     sedan: 4,
  //     sprinter: 3,
  //     suv: 2,
  //     limosine: 0,
  //   },
  //   {
  //     lastUpdatedDate: "2025-06-26T10:30:00Z",
  //     amount: 5186,
  //     sedan: 5,
  //     sprinter: 4,
  //     suv: 3,
  //     limosine: 2,
  //   },
  // ];

  // Generate 30 days of random data
  const campaignReportDailyMatrix = generateRandomFleetData(15);
  const fleetRevenueMatrix = {
    sedan: 72456,
    sprinter: 53422,
    suv: 62678,
    limosine: 71234,
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
        actions={<div>Wallet balance and subscription expiry goes here</div>}
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

        <div className="w-full h-75 bg-white/5 rounded-lg flex items-center justify-center text-gray-500">
          Dashboard content goes here
        </div>
      </section>
    </PortalWrapper>
  );
}
