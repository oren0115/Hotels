import * as React from "react";
import { cn } from "../../lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-3",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-block rounded-full border-primary border-t-transparent animate-spin",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
};


