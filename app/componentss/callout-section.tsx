import Image from "next/image";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import React from "react";
import Link from "next/link";

export default function CalloutSection() {
  return (
    <>
      {/* hero section */}
      <div className="bg-gray-200 p-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="p-6 py-[120px] md:p-5 flex-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center gap-4">
                <Text
                  size="text6xl"
                  as="p"
                  className="self-stretch text-center font-domine text-[72px] font-normal leading-[108%] tracking-[-0.72px] text-gray-800 md:text-[48px]"
                >
                  Train Like a Champion
                </Text>
                <Text
                  size="textxl"
                  as="p"
                  className="text-[22px] font-normal text-gray-700"
                >
                  Professional basketball training for all levels.
                </Text>
              </div>
            <Link href={"/search"}>
              <Button
                      
          size="lg"
          shape="round"
          className="bg-gray-800 hover:bg-pink-100 
          hover:text-gray-900 text-white rounded-lg px-[34px] w-auto max-w-fit mx-auto sm:px-5"
        >
          Get Started
        </Button>
        </Link>
             
             

            </div>
          </div>

          <div className="relative w-full max-w-[544px] aspect-square flex-1">
            <Image
              src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727693937/DSC05436_nlsfsj.jpg"
              alt="Featured Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
