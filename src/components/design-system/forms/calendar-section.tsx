"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Calendar } from "@/components/ui/calendar";

export function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <SectionWrapper
      id="calendar"
      title="Calendar"
      description="A date field component that allows users to enter and edit dates."
    >
      <ComponentPreview title="Single Date Selection">
        <div className="flex flex-col items-center gap-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          <p className="text-sm text-muted-foreground">
            Selected: {date ? date.toLocaleDateString() : "None"}
          </p>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "mode",
            type: '"single" | "multiple" | "range"',
            defaultValue: '"single"',
            description: "The selection mode of the calendar.",
          },
          {
            name: "selected",
            type: "Date | Date[] | DateRange",
            description: "The currently selected date(s).",
          },
          {
            name: "onSelect",
            type: "(date: Date | undefined) => void",
            description: "Callback when a date is selected.",
          },
          {
            name: "disabled",
            type: "Matcher | Matcher[]",
            description:
              "Dates or date ranges that should be disabled.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
