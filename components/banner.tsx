
import {cva, type VariantProps} from "class-variance-authority"
import { AlertTriangle, CheckCircleIcon } from "lucide-react";
import { Warning } from "postcss";
import { cn } from "@/../lib/utils";


const bannerVarients = cva(
    "border  text-center p-4 text-sm flex items-center w-full ",
     {
        variants: {
            variant: {
                warning: "text-gray-500 bg-yellow-200/80 border-yellow-30 text-primary",
                suceess: "bg-emerald-700 border-emerald-800 text-secondary"
            }
        },
        defaultVariants: {
            variant: "warning"
        }
     }   
);


interface BannerProps extends VariantProps<typeof bannerVarients> {
    label: string;
};


const iconMap = {
    warning: AlertTriangle,
    success: CheckCircleIcon
}
 
export const Banner = ({
    label,
    variant,
}: BannerProps) => {
     const Icon = iconMap[variant || "warning"]; 

    return ( 
        <div className={cn(bannerVarients({variant}), "text-gray-700")}>
        <Icon className="h-4 w-4 mr-2"/>
        {label}
    </div>
    
    )
}