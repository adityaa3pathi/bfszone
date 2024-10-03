// "use client"; // This makes this file a client-side component

// import { Button } from "./ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { MobileSidebar } from "../(dashboard)/_components/mobile-sidebar";
// import { usePathname } from "next/navigation";

// interface CourseNavbarProps {
//   userId?: string | null; // userId is passed as a prop from the server-side component
// }

// export default function NavBarContainer({
//   userId,
// }: CourseNavbarProps) {
//   const [isLoading, setIsLoading] = useState(true);
//   const pathname = usePathname();

//   // Define the routes where the MobileSidebar should be visible
//   const shouldShowMobileSidebar =
//     pathname?.includes("/creator") ||
//     pathname?.includes("/courses") ||
//     pathname?.includes("/all-courses") ||
//     pathname?.includes("/search");

//   // Update loading state when userId is resolved (whether authenticated or not)
//   useEffect(() => {
//     if (userId !== undefined) {
//       setIsLoading(false);
//     }
//   }, [userId]);

//   return (
//     <>
//       <div className="bg-gray-200">
//         <div className="flex flex-col items-center gap-[60px] py-2 sm:gap-[30px]">
//           <nav className="bg-gray-200 py-4 fixed top-0 z-50 shadow-custom-lg w-full">
//             <div className="container flex items-center justify-between mx-auto px-6 md:px-10">
//               {/* Logo is always rendered */}
//               {/* Conditionally render MobileSidebar only on small screens and specific routes */}
//               {shouldShowMobileSidebar && (
//                 <div className="md:hidden  bg-slate-600 flex items-center p-2 rounded">
//                   <MobileSidebar />
//                 </div>
//               )}
              
//               <div className="flex items-center gap-2">
//                 <Link href="/">
//                   <Image
//                     src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727725223/Screenshot_from_2024-10-01_01-08-53-removebg-preview_g3hixa.png"
//                     alt="Badaya Fitness Logo"
//                     width={100}
//                     height={1}
//                     className="h-[50px] w-[100px]"
//                   />
//                 </Link>
//                 <span className="text-2xl font-extrabold text-pink-100">
//                   {/* Logo Text or Other Content */}
//                 </span>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex items-center space-x-4">
//                 <Link href="/search" passHref>
//                   <Button
//                     size="sm"
//                     className="px-2 py-2 bg-pink-100 hover:bg-gray-400 text-gray-900 font-medium rounded"
//                   >
//                     Courses
//                   </Button>
//                 </Link>

//                 {/* Conditionally render UserButton or Sign Up */}
//                 {userId ? ( // Check if userId exists
//                   <UserButton afterSignOutUrl="/" /> // UserButton displayed if user is authenticated
//                 ) : (
//                   null // Render nothing if user is not authenticated
//                 )}
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }



"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function NavBarContainer() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/y" },
    { title: "About us", path: "/search" },
    { title: "Courses", path: "/search" },
    { title: "Our Branches", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ]

  return (
    <nav className="bg-gray-50 fixed w-full border-b md:border-0 shadow-lg z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className=" flex  items-center justify-between py-3 md:py-5 md:block">
          <div >
        <Link href="/">
        <Image
            src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727725223/Screenshot_from_2024-10-01_01-08-53-removebg-preview_g3hixa.png"
            alt="Badaya Fitness Logo"
            width={100}  // Fixed width
            height={50}  // Fixed height
            className="object-contain" // Ensures image scales correctly within the given width/height
          />
              </Link>
              </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8  md:flex md:space-x-6 md:space-y-0 ">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600 ">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <Link href={"/sign-up"}>
            <Button className=" flex items-center space-x-2 border p-2 bg-gray-600 rounded-full"
            >
              Slam-jam League
            </Button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

