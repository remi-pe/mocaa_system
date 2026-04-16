"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export function InputOTPSection() {
  return (
    <SectionWrapper
      id="input-otp"
      title="Input OTP"
      description="Accessible one-time password input with copy/paste support."
    >
      <ComponentPreview
        title="6-Digit with Separator"
        description="Groups of 3 separated by a dash."
      >
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </ComponentPreview>

      <ComponentPreview title="4-Digit">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "maxLength",
            type: "number",
            description: "The total number of input slots.",
          },
          {
            name: "pattern",
            type: "string",
            description:
              'Regex pattern to validate input (e.g. "^[0-9]*$" for digits only).',
          },
          {
            name: "onComplete",
            type: "(value: string) => void",
            description: "Callback when all slots are filled.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
