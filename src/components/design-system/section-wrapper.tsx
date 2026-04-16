import { Separator } from "@/components/ui/separator";
import { LinkIcon } from "lucide-react";

interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} data-section={id} className="scroll-mt-20 py-10">
      <Separator className="mb-8" />
      <div className="mb-6">
        <a href={`#${id}`} className="group inline-flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <LinkIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-50" />
        </a>
        {description && (
          <p className="mt-0.5 text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
