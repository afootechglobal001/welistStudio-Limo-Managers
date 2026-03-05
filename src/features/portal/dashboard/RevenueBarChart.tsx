"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart,
  registerables,
  ChartConfiguration,
  TooltipItem,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels);

interface DataSetItems {
  lastUpdatedDate: string;
  sedan: number;
  sprinter: number;
  suv: number;
  limosine: number;
  amount: number;
}

interface FleetBarChartProps {
  DataSetMatrix: DataSetItems[];
}

const RevenueBarChart: React.FC<FleetBarChartProps> = ({ DataSetMatrix }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // <-- useRef instead of let

  useEffect(() => {
    if (!chartRef.current) return;

    const sortedData = [...DataSetMatrix].sort(
      (a, b) =>
        new Date(a.lastUpdatedDate).getTime() -
        new Date(b.lastUpdatedDate).getTime(),
    );

    const labels = sortedData.map((item) =>
      new Date(item.lastUpdatedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    );

    const amounts = sortedData.map((item) => item.amount);

    const data = {
      labels,
      datasets: [
        {
          label: "Total Amount",
          data: amounts,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: 10,
        },
      ],
    };

    const config: ChartConfiguration<"bar"> = {
      type: "bar",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 5000,
          easing: "easeOutCubic",
          delay: (context) => context.dataIndex * 200,
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "rgba(255,255,255,0.6)" },
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: { color: "rgba(255,255,255,0.6)" },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function (tooltipItems: TooltipItem<"bar">[]) {
                const idx = tooltipItems[0].dataIndex;
                return `Date: ${labels[idx]}`;
              },
              label: function (tooltipItem: TooltipItem<"bar">) {
                const idx = tooltipItem.dataIndex;
                const fleet = sortedData[idx];
                return [
                  `Total Amount: ${fleet.amount}`,
                  `Sedan: ${fleet.sedan}`,
                  `SUV: ${fleet.suv}`,
                  `Sprinter: ${fleet.sprinter}`,
                  `Limousine: ${fleet.limosine}`,
                ];
              },
            },
          },
          datalabels: { display: false },
        },
      },
      plugins: [ChartDataLabels],
    };

    // Destroy previous chart if exists
    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    // Create new chart
    chartInstanceRef.current = new Chart(chartRef.current, config);

    // Cleanup
    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [DataSetMatrix]);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default RevenueBarChart;
