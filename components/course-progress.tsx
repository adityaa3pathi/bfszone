"use client"

import { Progress } from "./ui/progress";
import { cn } from "../lib/utils";


interface CourseProgressProps {
    value: number;
    variant: "default" | "success",
    size?: "default" | "sm",
};

const colorByVariant = {
    default: "text-sky-700",
    success: "text-emerald-700",
}

const sizeByVariant = {
    default: "text-sm",
    success: "text-xs",
}

 const CourseProgress = ({
    value,
    variant= "default",
    size = "default",
}: CourseProgressProps) => {

    return (
        <div>
            <Progress
             className="h-2"
             value={value}
             variant={variant}
            />

            <p className={cn(
                "font-medium mt-2 text-sky-700",
                colorByVariant[variant || "default"],
                sizeByVariant[variant || "default"],
            )}>
                {Math.round(value)}% Complete
            </p>
        </div>
    )
}

export default CourseProgress