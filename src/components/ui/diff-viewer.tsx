import { cn } from "../../lib/utils";

interface DiffViewerProps {
  oldCode: string;
  newCode: string;
  className?: string;
}

type DiffLine = {
  kind: "add" | "remove" | "same";
  oldNum?: number;
  newNum?: number;
  content: string;
};

function computeDiff(oldCode: string, newCode: string): DiffLine[] {
  const oldLines = oldCode.split("\n");
  const newLines = newCode.split("\n");
  const result: DiffLine[] = [];
  let oldI = 0;
  let newI = 0;

  while (oldI < oldLines.length || newI < newLines.length) {
    const oldLine = oldLines[oldI];
    const newLine = newLines[newI];

    if (oldI >= oldLines.length) {
      result.push({ kind: "add", newNum: newI + 1, content: newLine });
      newI++;
    } else if (newI >= newLines.length) {
      result.push({ kind: "remove", oldNum: oldI + 1, content: oldLine });
      oldI++;
    } else if (oldLine === newLine) {
      result.push({
        kind: "same",
        oldNum: oldI + 1,
        newNum: newI + 1,
        content: oldLine,
      });
      oldI++;
      newI++;
    } else {
      // Look ahead: if new line appears further in old, treat as removal
      const foundInOld = oldLines.indexOf(newLine, oldI);
      const foundInNew = newLines.indexOf(oldLine, newI);
      if (
        foundInNew !== -1 &&
        (foundInOld === -1 || foundInNew - newI < foundInOld - oldI)
      ) {
        result.push({ kind: "remove", oldNum: oldI + 1, content: oldLine });
        oldI++;
      } else if (foundInOld !== -1) {
        result.push({ kind: "add", newNum: newI + 1, content: newLine });
        newI++;
      } else {
        result.push({ kind: "remove", oldNum: oldI + 1, content: oldLine });
        result.push({ kind: "add", newNum: newI + 1, content: newLine });
        oldI++;
        newI++;
      }
    }
  }

  return result;
}

export function DiffViewer({ oldCode, newCode, className }: DiffViewerProps) {
  const diff = computeDiff(oldCode, newCode);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-muted/20 font-mono text-xs",
        className
      )}
    >
      <div className="overflow-x-auto">
        {diff.map((line, i) => {
          const bg =
            line.kind === "add"
              ? "bg-emerald-500/10"
              : line.kind === "remove"
                ? "bg-red-500/10"
                : "";
          const prefix =
            line.kind === "add" ? "+" : line.kind === "remove" ? "-" : " ";
          const prefixColor =
            line.kind === "add"
              ? "text-emerald-600"
              : line.kind === "remove"
                ? "text-red-600"
                : "text-muted-foreground/60";
          return (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[3ch_3ch_1ch_1fr] gap-x-2 px-2 py-0.5 leading-5",
                bg
              )}
            >
              <span className="select-none text-right text-muted-foreground/50 tabular-nums">
                {line.oldNum ?? ""}
              </span>
              <span className="select-none text-right text-muted-foreground/50 tabular-nums">
                {line.newNum ?? ""}
              </span>
              <span
                className={cn("select-none font-semibold", prefixColor)}
              >
                {prefix}
              </span>
              <span className="whitespace-pre">{line.content || " "}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
