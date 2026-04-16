"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectSection() {
  return (
    <SectionWrapper
      id="select"
      title="Select"
      description="Displays a list of options for the user to pick from, triggered by a button."
    >
      <ComponentPreview title="Basic">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <ComponentPreview
        title="With Groups"
        description="Organize items into labeled groups."
      >
        <Select>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern (EST)</SelectItem>
              <SelectItem value="cst">Central (CST)</SelectItem>
              <SelectItem value="pst">Pacific (PST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">Greenwich (GMT)</SelectItem>
              <SelectItem value="cet">Central European (CET)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string",
            description: "The controlled value of the select.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the selected value changes.",
          },
          {
            name: "placeholder",
            type: "string",
            description:
              "Text shown when no value is selected (via SelectValue).",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents interaction with the select.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
