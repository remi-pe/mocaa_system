"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadSection() {
  return (
    <SectionWrapper
      id="file-upload"
      title="File Upload"
      description="A drag-and-drop zone for uploading one or multiple files."
    >
      <ComponentPreview
        title="Single image"
        description="Accepts a single image file."
        className="block"
      >
        <FileUpload accept="image/*" />
      </ComponentPreview>

      <ComponentPreview
        title="Multiple files with 5MB cap"
        description="Drag multiple files in — any larger than 5MB will be rejected."
        className="block"
      >
        <FileUpload multiple maxSize={5 * 1024 * 1024} />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "onFilesSelected",
            type: "(files: File[]) => void",
            description: "Callback fired with the current selection.",
          },
          {
            name: "accept",
            type: "string",
            description: "Comma-separated MIME types or extensions.",
          },
          {
            name: "multiple",
            type: "boolean",
            defaultValue: "false",
            description: "Allow selecting more than one file.",
          },
          {
            name: "maxSize",
            type: "number",
            description: "Maximum file size in bytes.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables drag and click-to-browse.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
