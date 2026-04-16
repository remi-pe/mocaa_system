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
    <div className="mt-4 overflow-hidden rounded-lg border">
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
  );
}
