"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function DatePickerDemo() {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function DatePickerSection() {
  return (
    <SectionWrapper
      id="date-picker"
      title="Date Picker"
      description="A date picker component composed from Popover, Calendar, and Button."
    >
      <ComponentPreview
        title="Date Picker"
        description="Click the button to open a calendar popover."
      >
        <DatePickerDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "Popover",
            type: "component",
            description: "Container that manages the open/close state.",
          },
          {
            name: "PopoverTrigger",
            type: "component",
            description: "The button that opens the popover.",
          },
          {
            name: "PopoverContent",
            type: "component",
            description: "The floating panel containing the calendar.",
          },
          {
            name: "Calendar",
            type: "component",
            description:
              "The calendar component inside the popover for date selection.",
          },
          {
            name: "Button",
            type: "component",
            description:
              "Displays the selected date or placeholder text.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
