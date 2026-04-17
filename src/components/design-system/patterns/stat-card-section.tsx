import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { StatCard } from "@/components/ui/stat-card";

export function StatCardSection() {
  return (
    <SectionWrapper
      id="stat-card"
      title="Stat Card"
      description="Display a key metric with optional delta and icon."
    >
      <ComponentPreview title="Positive and negative deltas">
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          <StatCard
            label="Revenue"
            value="$42,580"
            delta={12.5}
            helperText="vs last month"
          />
          <StatCard
            label="Churn rate"
            value="2.4%"
            delta={-0.8}
            helperText="vs last month"
          />
        </div>
      </ComponentPreview>
      <ComponentPreview title="Grid of 4 with icons">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total users"
            value="12,345"
            delta={8.2}
            icon={<Users />}
          />
          <StatCard
            label="Revenue"
            value="$42.5k"
            delta={12.5}
            icon={<DollarSign />}
          />
          <StatCard
            label="Orders"
            value="1,284"
            delta={-3.1}
            icon={<ShoppingCart />}
          />
          <StatCard
            label="Active now"
            value="573"
            delta={4.6}
            icon={<Activity />}
          />
        </div>
      </ComponentPreview>
      <PropsTable
        props={[
          { name: "label", type: "string", description: "Small label displayed above the value." },
          { name: "value", type: "string | number", description: "The main metric value." },
          { name: "delta", type: "number", description: "Positive or negative change percentage." },
          { name: "helperText", type: "string", description: "Optional contextual text below the value." },
          { name: "icon", type: "React.ReactNode", description: "Icon displayed in the top-right corner." },
          { name: "className", type: "string", description: "Additional classes for the card." },
        ]}
      />
    </SectionWrapper>
  );
}
