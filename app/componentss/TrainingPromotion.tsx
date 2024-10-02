import { Text } from "./ui/text";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  className?: string;
  subheadingText?: React.ReactNode;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  ctaText?: React.ReactNode;
}

export default function TrainingPromotion({
  subheadingText = "Improve Your Skills",
  headingText = "Train Like a Pro",
  descriptionText = "Enhance your skills with our expertly designed courses.",
  ctaText = "Join Now",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-full max-w-4xl bg-gray-800 border-indigo-300 border border-solid rounded-[16px] overflow-hidden`} // Restrict max width
    >
      {/* Text Section */}
      <div className="flex flex-1 flex-col items-start justify-center gap-6 bg-gray-800 px-[30px] py-[76px] md:py-5 sm:gap-6 sm:p-5">
        <div className="flex flex-col items-start gap-4 self-stretch sm:gap-4">
          <Text as="p" className="text-[14px] font-normal text-gray-100">
            {subheadingText}
          </Text>
          <div className="flex flex-col items-start gap-2 self-stretch sm:gap-2">
            <Text
              size="text2xl"
              as="p"
              className="text-[28px] font-normal text-gray-100 sm:text-[23px]"
            >
              {headingText}
            </Text>
            <Text
              size="textlg"
              as="p"
              className="w-full text-[18px] font-normal leading-[150%] text-gray-100 sm:w-full sm:text-[15px]"
            >
              {descriptionText}
            </Text>
          </div>
        </div>
        <Link href={"/search"}>
        <Button  className="text-[14px] font-normal hover:bg-pink-100 bg-gray-700 rounded-lg">
          {ctaText}
        </Button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative w-[50%] max-w-md h-[364px] rounded-[16px] overflow-hidden"> {/* Set max width */}
        <Image
          src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727637819/badaya-bhai_dw5cgh.jpg"
          alt="Feature Image"
          layout="fill"
          objectFit="cover"
          className="rounded-bl-[16px] rounded-tl-[16px]" // Match border radius
        />
      </div>
    </div>
  );
}
