import React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.05] px-3 py-1 text-xs font-medium text-ink/90",
        className
      )}
      {...props}
    />
  );
}
