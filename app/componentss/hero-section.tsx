"use client";

import "../styles/tailwind.css"
import "../styles/index.css"
import "../styles/font.css"

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";


export const HeroSection = () => {
  return (
    <div className="w-full bg-gray-200 mt-10">
  <div className="flex flex-col items-center gap-[60px] py-2 sm:gap-[30px]">
    <div className="w-3/4 mx-auto mb-28 md:px-5"> {/* Set to 3/4 width and center */}
      <div className="flex flex-col gap-16 sm:gap-8">
        <div className="flex flex-col items-center gap-[38px] px-14 md:px-5">
        <p className="text-gray-900 text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold leading-[120%]">
          Master the art of basketball with our expert-led courses.
        </p>
          <p className="text-xl md:text-2xl lg:text-3xl w-full md:w-[75%] lg:w-[66%] text-center font-extrabold leading-[130%] !text-white-a700">
            Join our community and elevate your game with professional guidance and interactive sessions.
          </p>

          <Link href={"/search"}>
          <Button shape="round" size="xl" className="rounded-lg bg-gray-800 px-8 sm:px-5 min-w-[148px]">
            Get Started
          </Button>
          </Link>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727692318/DSC02986_1_aiqmqn.jpg"
            width={1200}
            height={600}
            alt="Feature Image"
            className="h-[600px] w-full rounded-[24px] object-cover lg:h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection