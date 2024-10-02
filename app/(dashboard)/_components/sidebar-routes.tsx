"use client"


import { Layout, Compass, BarChart, List } from "lucide-react"

import { SidebarItem } from "./sidebarItem"
import { usePathname } from "next/navigation"

const guestRoutes = [

    {
        icon: Layout,
        label: "DashBoard",
        href: "/all-courses"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }

]


const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/creator/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/creator/analytics"
    }
]
export const SidebarRoutes = ( ) => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/creator");


    const routes = isTeacherPage ? teacherRoutes : guestRoutes ;
    return (

        <div  className="  flex flex-col w-full">
                    {routes.map((route) => (

                        <SidebarItem
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                        />
                    ))}
        </div>
    )
}