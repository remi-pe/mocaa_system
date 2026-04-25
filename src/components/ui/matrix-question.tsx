"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type MatrixRow = {
  value: string;
  label: string;
};

export type MatrixColumn = {
  value: string;
  label: string;
};

export type MatrixAnswers = Record<string, string>;

interface MatrixQuestionProps {
  rows: MatrixRow[];
  columns: MatrixColumn[];
  value?: MatrixAnswers;
  defaultValue?: MatrixAnswers;
  onValueChange?: (value: MatrixAnswers) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

function MatrixQuestion({
  rows,
  columns,
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  className,
}: MatrixQuestionProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<MatrixAnswers>(defaultValue ?? {});
  const answers = isControlled ? value! : internal;

  const setRow = (rowValue: string, colValue: string) => {
    if (disabled) return;
    const next = { ...answers, [rowValue]: colValue };
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      data-slot="matrix-question"
      className={cn("w-full overflow-x-auto rounded-lg border", className)}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/30">
            <th scope="col" className="w-1/3 px-3 py-2 text-left font-medium text-muted-foreground" />
            {columns.map((col) => (
              <th
                key={col.value}
                scope="col"
                className="px-2 py-2 text-center text-xs font-medium text-muted-foreground"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => {
            const selected = answers[row.value];
            return (
              <tr
                key={row.value}
                role="radiogroup"
                aria-label={row.label}
                className={cn(rowIdx !== rows.length - 1 && "border-b")}
              >
                <th scope="row" className="px-3 py-3 text-left font-normal">
                  {row.label}
                </th>
                {columns.map((col) => {
                  const checked = selected === col.value;
                  const inputId = `${row.value}-${col.value}`;
                  return (
                    <td key={col.value} className="px-2 py-3 text-center">
                      <label
                        htmlFor={inputId}
                        className={cn(
                          "mx-auto flex size-5 cursor-pointer items-center justify-center rounded-full border border-input transition-colors",
                          "hover:border-foreground",
                          "has-[:focus-visible]:border-ring has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                          checked && "border-primary bg-primary",
                          disabled && "cursor-not-allowed opacity-50"
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={name ? `${name}-${row.value}` : row.value}
                          value={col.value}
                          checked={checked}
                          disabled={disabled}
                          onChange={() => setRow(row.value, col.value)}
                          className="sr-only"
                        />
                        {checked && (
                          <span className="size-2 rounded-full bg-primary-foreground" />
                        )}
                      </label>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { MatrixQuestion };
