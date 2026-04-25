"use client";
import { useEffect, useState } from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress = ({
  percentage,
  size = 64,
  strokeWidth = 6,
}: CircularProgressProps) => {
  const [progress, setProgress] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 200);

    return () => clearTimeout(timeout);
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className=" flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* background circle */}
        <circle
          stroke="rgba(255,255,255,0.15)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* progress circle */}
        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1s ease",
          }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      {/* center text */}
      <span className="absolute text-sm font-semibold text-white">
        {progress}%
      </span>
    </div>
  );
};

export default CircularProgress;
