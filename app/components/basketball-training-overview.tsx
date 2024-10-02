import TrainingPromotion from "../../components/course-card";
import React from "react";
import BadayaBhai1 from "@/app/assets/badayabhai1.jpeg";

export default function BasketballTrainingOverview() {
  return (
    <>
      {/* basketball training overview section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-4 md:px-5">
          <div className="flex flex-col items-start gap-2">
            <p className="font-domine text-[56px] font-normal text-gray-100 md:text-[48px] sm:text-[42px]">
              Unleash Your Potential
            </p>
            <p className="text-[18px] font-normal text-white-a700">
              Discover our comprehensive basketball training courses.
            </p>
          </div>
          <div className="flex gap-6 md:flex-col">
            <TrainingPromotion />
            <TrainingPromotion
              subheadingText="Improve Your Game"
              headingText="Master basketball techniques"
              descriptionText="Step-by-step guidance from top coaches."
            
            />
          </div>
        </div>
      </div>
    </>
  );
}
