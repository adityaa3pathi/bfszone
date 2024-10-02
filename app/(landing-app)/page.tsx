"use client";
import ".././globals.css";
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

import HeroSection from "../componentss/hero-section";
import NavBar from "../componentss/navbar-container";
import Faqs from "../componentss/faqs";

import BasketballTrainingOverview from "../componentss/basketball-training-overview";
import { Text } from "../componentss/ui/text";
import CalloutSection from "../componentss/callout-section";
import HowItWorks from "../componentss/HowItWorks";
import FooterAction from "../componentss/footer-action";
import Footer from "../componentss/footer";
import OwnerCoachSection from "../componentss/OwnerCoachSection";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";

export default async function Landing() {

  
  return (
    <>
      <NavBar
      
      />
      <div className="pt-[35px]">
        <HeroSection />
      </div>
      <div className="bg-gray-200 py-[120px] md:py-5">
        <BasketballTrainingOverview />
      </div>
      <div className="contaimer-xs bg-gray-200 flex flex-col items-center self-center px-14 md:px-5">
        <p className="text-[18px] text-lg font-normal text-black py-8">
          Trusted by top atheletes
        </p>
      </div>
      <div>
        <OwnerCoachSection />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <CalloutSection />
      </div>
      {/* <div>
    <Faqs/>
</div> */}

      <div className=" self-stretch">
        {/* <FooterAction/> */}
        <Footer />
      </div>
    </>
  );
}
