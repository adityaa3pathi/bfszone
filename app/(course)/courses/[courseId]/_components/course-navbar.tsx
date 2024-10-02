import { Button } from "../../../../componentss/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Chapter, Course, UserProgress } from "prisma/prisma-client"
import { CourseMobileSidebar } from "./course-mobile-sidebar";




import React from "react";
import { Text } from "../../../../componentss/ui/text";



interface  CourseNavbarProps {
  course: Course & {
     chapters: (Chapter & {
         userProgress: UserProgress[] | null; 
     })[];
  };
  progressCount: number;
}


export default function NavBar({
  course,
  progressCount,
}: CourseNavbarProps) {
return (
<div className="w-full bg-gray-200  ">
    
<div className="flex flex-col items-center gap-[60px]  py-2 sm:gap-[30px]">
<nav className="bg-gray-200 py-4 fixed top-0 z-50 shadow-custom-lg w-full">
      <div className="container flex items-center justify-between mx-auto px-6 md:px-10">
        
        {/* Logo on the left */}
        <div className="flex items-center gap-2">
          <Link href="/">
          <Image 
            src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727725223/Screenshot_from_2024-10-01_01-08-53-removebg-preview_g3hixa.png" 
             height={1}
             width={100}
            alt="HoopsMaster Logo" 
            className="h-[50px] w-[100px]" 
          />
          </Link>
          <span className="text-2xl font-extrabold text-pink-100">  Be The Best</span>
        </div>

        {/* Navigation Links */}
        {/* <div className="flex items-center space-x-8">
          <Link href="/aboutus" passHref>
            <Text size="textlg" as="p" className="text-[12px]  font-normal !text-gray-900  cursor-pointer">
              About Us
            </Text>
          </Link>
          <Link href="/courses" passHref>
          <Text size="textlg" as="p" className="text-[12px]  font-normal !text-gray-900 hover:text-gray-900 cursor-pointer">
              Courses
            </Text>
          </Link>
          <Link href="/contact" passHref>
          <Text size="textlg" as="p" className="text-[12px]  font-normal !text-gray-900 hover:text-gray-900 cursor-pointer">
              Contact
            </Text>
          </Link>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/tournaments" passHref>
            <Button size="lg" className="px-4 py-3 bg-pink-100 hover:bg-gray-400 text-gray-900 font-medium rounded">
              Tournaments
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button size="lg" variant="outline" className="px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
     </nav>
     {/*
*/}
</div>
</div> 
)

}