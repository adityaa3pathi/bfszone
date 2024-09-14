"use client"

import {UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


export const NavbarRoutes = () => {

        const pathname = usePathname();
        const router = useRouter();


        const isTeacherPage = pathname?.startsWith("/creator");
        const isCoursePage = pathname?.includes("/courses");
        const isSearchPage = pathname === "/search";


    return (

    <div 
    className="flex gap-x-2 ml-auto"
    >

        {isTeacherPage || isCoursePage ? (
             <Link href="/">
            <Button >
                <LogOut  className="h-4 w-4 mr-2"/>
                Exit
            </Button>
            </Link>
        )
            :

         (
            <Link href="/creator/courses" >
            <Button 
            size="sm" variant="ghost"
            >
                Creator Mode
            </Button>
            </Link>
        )}
        <UserButton
        afterSwitchSessionUrl="/"
        />
    </div>

)
}