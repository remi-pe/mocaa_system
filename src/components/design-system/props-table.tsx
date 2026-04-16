"use client";

import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Prop {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <Collapsible className="mt-4">
      <CollapsibleTrigger className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
        <ChevronDown className="h-4 w-4 transition-transform -rotate-90 group-data-open:rotate-0" />
        Props
        <span className="text-xs text-muted-foreground/60">({props.length})</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2 overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Prop</TableHead>
                <TableHead className="w-[180px]">Type</TableHead>
                <TableHead className="w-[100px]">Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.map((prop) => (
                <TableRow key={prop.name}>
                  <TableCell className="font-mono text-xs font-medium">
                    {prop.name}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {prop.type}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {prop.defaultValue ?? "—"}
                  </TableCell>
                  <TableCell className="text-sm">{prop.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
