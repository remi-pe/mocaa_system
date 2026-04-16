"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";

import { z } from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function FormDemo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: FormValues) {
    toast.success("Form submitted!", {
      description: `Username: ${values.username}, Email: ${values.email}`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We will never share your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function FormSection() {
  return (
    <SectionWrapper
      id="form"
      title="Form"
      description="Building forms with React Hook Form, Zod validation, and accessible form components."
    >
      <ComponentPreview
        title="Complete Form"
        description="A form with validation using react-hook-form and zod."
        className="items-start justify-start"
      >
        <FormDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "Form",
            type: "FormProvider",
            description:
              "Wraps the form and provides context from react-hook-form.",
          },
          {
            name: "FormField",
            type: "Controller",
            description:
              "Connects a form field to react-hook-form via the control prop.",
          },
          {
            name: "FormItem",
            type: "div",
            description: "Wrapper for a single form field with spacing.",
          },
          {
            name: "FormLabel",
            type: "Label",
            description:
              "Accessible label that turns red on validation error.",
          },
          {
            name: "FormControl",
            type: "div",
            description:
              "Wraps the input and provides aria attributes for accessibility.",
          },
          {
            name: "FormDescription",
            type: "p",
            description: "Help text shown below the input.",
          },
          {
            name: "FormMessage",
            type: "p",
            description:
              "Displays validation error messages from the form state.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
