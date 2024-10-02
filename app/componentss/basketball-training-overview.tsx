import { Text } from "./ui/text";
import TrainingPromotion from "./TrainingPromotion";
import React from "react";




export default function BasketballTrainingOverview() {

  const BadayaBhai1 = "https://res.cloudinary.com/djrrvcvyl/image/upload/v1727637819/badaya-bhai_dw5cgh.jpg"
  return (
    <>
      {/* basketball training overview section */}
      <div className="flex flex-col items-center bg-gray-200">
        <div className="container-xs flex flex-col gap-4 md:px-5">
          <div className="flex flex-col items-start gap-2">
            <Text
              size="text5xl"
              as="p"
              className="font-domine text-[56px] font-normal !text-gray-900 md:text-[48px] sm:text-[42px]"
            >
              Unleash Your Potential
            </Text>
            <Text
              size="textlg"
              as="p"
              className="text-[18px] font-normal !text-white-a700"
            >
              Discover our comprehensive basketball training courses.
            </Text>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <TrainingPromotion />
            <TrainingPromotion
              imageUrl="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727693107/badayabhai2_phirtw.jpg"
              subheadingText="Improve Your Game"
              headingText="Master basketball techniques"
              ctaText="Join Now"
              descriptionText="Step-by-step guidance from top coaches."
            
            />
          </div>
        </div>
      </div>
    </>
  );
}