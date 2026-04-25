"use client";

import { useState } from "react";
import { Briefcase, Sparkles, Users, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  ChoiceCard,
  ChoiceCardGroup,
  ChoiceCardItem,
} from "@/components/ui/choice-card";

export function ChoiceCardSection() {
  const [single, setSingle] = useState<string>("solo");
  const [multi, setMulti] = useState<string[]>(["onboarding"]);

  return (
    <SectionWrapper
      id="choice-card"
      title="Choice Card"
      description="Radio or checkbox styled as a large clickable card with icon, title, and description. Friendlier than plain radios for product questionnaires."
    >
      <ComponentPreview title="Single select (radio)">
        <div className="w-full max-w-md">
          <p className="mb-3 text-sm">What best describes your team?</p>
          <ChoiceCardGroup
            type="single"
            value={single}
            onValueChange={(v) => setSingle(v as string)}
          >
            <ChoiceCardItem
              value="solo"
              title="Solo founder"
              description="Just me, building something on my own."
              icon={<Sparkles className="size-5" />}
            />
            <ChoiceCardItem
              value="small"
              title="Small team"
              description="2–10 people working closely together."
              icon={<Users className="size-5" />}
            />
            <ChoiceCardItem
              value="company"
              title="Company"
              description="An established organization with multiple teams."
              icon={<Briefcase className="size-5" />}
            />
          </ChoiceCardGroup>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Multi select (checkbox)">
        <div className="w-full max-w-md">
          <p className="mb-3 text-sm">What are you hoping to improve?</p>
          <ChoiceCardGroup
            type="multiple"
            value={multi}
            onValueChange={(v) => setMulti(v as string[])}
          >
            <ChoiceCardItem
              value="onboarding"
              title="Onboarding"
              description="Get new users to first value faster."
              icon={<Zap className="size-5" />}
            />
            <ChoiceCardItem
              value="retention"
              title="Retention"
              description="Keep existing users engaged and active."
              icon={<Users className="size-5" />}
            />
            <ChoiceCardItem
              value="growth"
              title="Growth"
              description="Acquire new users at lower CAC."
              icon={<Sparkles className="size-5" />}
            />
          </ChoiceCardGroup>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Standalone (no group)">
        <div className="w-full max-w-md">
          <ChoiceCard
            title="Subscribe to product updates"
            description="We'll email you once a month — no spam."
            icon={<Sparkles className="size-5" />}
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "type",
            type: '"single" | "multiple"',
            defaultValue: '"single"',
            description: "ChoiceCardGroup: single uses radio semantics, multiple uses checkbox.",
          },
          {
            name: "value",
            type: "string | string[]",
            description: "Controlled selection. String for single, string[] for multiple.",
          },
          {
            name: "onValueChange",
            type: "(value: string | string[]) => void",
            description: "Fires when selection changes.",
          },
          {
            name: "title",
            type: "string",
            description: "ChoiceCardItem: card heading.",
          },
          {
            name: "description",
            type: "string",
            description: "ChoiceCardItem: secondary text below the title.",
          },
          {
            name: "icon",
            type: "ReactNode",
            description: "ChoiceCardItem: icon shown in the leading badge.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
