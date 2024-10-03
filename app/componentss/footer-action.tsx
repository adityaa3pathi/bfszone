"use client"

import { Img } from "./ui/image"
import { Text } from "./ui/text"
import Image from "next/image"
import { Button } from "./ui/button"

export default function FooterAction() {

return (<div className="flex justify-center bg-white py-[120px] md:py-5">
  <div
    className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5"
  >
    <Image
      src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727728789/DSC01264_q0gpdo.jpg"
      width={568}
      height={326}
      alt="Excellence Image"
      className="h-[326px] w- [46%] rounded-lg object-contain md:w-full"
    />
    <div className="flex w- [46%] flex-col items-start gap-5 md:w-full">
      <Text
        size="textxl"
        as="p"
        className="text-[22px] font-extrabold text-gray-900"
      >
        Recognizing Excellence
      </Text>
      <Text
        size="text4xl"
        as="p"
        className="w-full font-domine text-[46px] font-normal leading-[130%] text-gray-800 md:text-[42px] sm:text-[36px]"
      >
        Achieve Your Goals with Us
      </Text>
      <Text
        size="textmd"
        as="p"
        className="text-[16px] font-normal text-white-a700"
      >
        Our courses are designed to help you reach your full potential in
        basketball.
      </Text>
      <Button
        shape="round"
        className="min-w-[114px] rounded-lg px-[26px] sm:px-5"
      >
        Join Now
      </Button>
    </div>
  </div>
</div>)

}