"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface SparklineProps {
  data: number[];
  color?: string;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export function Sparkline({
  data,
  color = "var(--primary)",
  height = 32,
  strokeWidth = 1.5,
  className,
}: SparklineProps) {
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
