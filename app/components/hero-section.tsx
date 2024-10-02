// components/HeroSection.tsx
import { Button } from "../../components/ui/button";
import Image from "next/image";
import basketballImage from "../assets/basketball-player-dribbles-outdoor-at-the-streets-the-art-of-street-basketball-dribbling-generative-ai-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="w-full bg-blue_gray-800 py-16 sm:py-12 flex flex-col items-center text-center">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-white font-domine text-lg font-semibold leading-tight">
          {/* Master the art of basketball with our expert-led courses. */}
        </p>
        <p className="mt-4 text-xl md:text-lg sm:text-base text-white-a700 max-w-3xl mx-auto">
          Join our community and elevate your game with professional guidance and interactive sessions.
        </p>
        <Button
          size="lg"
          className="mt-6 rounded-lg px-6 py-3 bg-yellow-900 text-white"
        >
          Get Started
        </Button>
        <div className="mt-12 w-full">
          <Image
            src={basketballImage}
            alt="Basketball training"
            width={1200}
            height={600}
            className="rounded-lg object-cover h-[600px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
