"use client"

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/../lib/utils";

// Define progress variant classes
const progressVariants = cva(
  "h-full w-full flex-1 bg-primary transition-all", 
  {
    variants: {
      variant: {
        default: "bg-sky-600",
        success: "bg-emerald-700",  
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define props for Progress component
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof progressVariants> {}

type CombinedProgresProps = ProgressProps & 
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>, CombinedProgresProps
>(({ className, value, variant, ...props }, ref) => {

  // Handle edge cases for `value`
  if (typeof value !== 'number' || value < 0 || value > 100) {
    console.warn('Progress value is invalid or out of range. It should be between 0 and 100.');
    value = 0; // fallback to 0
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = "Progress";

export { Progress };
