"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels);

interface FleetRevenueMatrix {
  sedan: number;
  sprinter: number;
  suv: number;
  limosine: number;
}

interface FleetDonutChartProps {
  fleetRevenueMatrix: FleetRevenueMatrix;
}

const FleetDonutChart: React.FC<FleetDonutChartProps> = ({
  fleetRevenueMatrix,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // <-- useRef to store chart instance

  useEffect(() => {
    if (!chartRef.current) return;

    const data = {
      labels: ["Sedan", "Sprinter", "SUV", "Limousine"],
      datasets: [
        {
          data: [
            fleetRevenueMatrix.sedan,
            fleetRevenueMatrix.sprinter,
            fleetRevenueMatrix.suv,
            fleetRevenueMatrix.limosine,
          ],
          backgroundColor: [
            "rgba(54,162,235,0.9)",
            "rgba(75,192,192,0.9)",
            "rgba(255,206,86,0.9)",
            "rgba(255,99,132,0.9)",
          ],
          borderWidth: 0,
          hoverOffset: 10,
        },
      ],
    };

    const config: ChartConfiguration<"doughnut"> = {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "50%",
        animation: {
          animateRotate: true,
          duration: 2000,
          easing: "easeOutCubic",
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#ffffff",
              padding: 20,
              font: { size: 12, weight: 500 },
            },
          },
          tooltip: {
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            backgroundColor: "rgba(0,0,0,0.7)",
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label;
                const value = tooltipItem.raw;
                return `${label}: ${value}`;
              },
            },
          },
          datalabels: {
            color: "#ffffff",
            font: { weight: "bold", size: 14 },
            formatter: (value) => value,
          },
        },
      },
      plugins: [ChartDataLabels],
    };

    // Destroy previous chart if exists
    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    // Create new chart and store it in ref
    chartInstanceRef.current = new Chart(chartRef.current, config);

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [fleetRevenueMatrix]);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default FleetDonutChart;
