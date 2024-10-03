"use client";

import Image from "next/image";



const OwnerCoachSection = () => {
  return (
    <section className="relative py-12 px-6 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg: justify-between lg:space-x-8 ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 xl:w-1/3">
  <div className="relative h-[450px] w-full overflow-hidden transition-transform duration-300 hover:scale-105 ">
    <Image
      src="https://res.cloudinary.com/djrrvcvyl/image/upload/v1727693757/Screenshot_from_2024-09-30_16-25-30_uq1syp.png"
      alt="Owner and Coach"
      layout="fill"
      objectFit="contain"
      className="rounded-lg"
    />
  </div>
</div>


        {/* Description Section */}
        <div className="w-full lg:w-1/2 xl:w-2/3">
          <h2 className="text-3xl lg:text-4xl  text-gray-800 font-bold mb-4 mt-2">
            Meet Our Coach - Saurabh Badaya
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Saurabh Badaya is proud owner of BFS Zone, he
          founded Badaya Fitness and Sports Zone in
          the year 2019 with a vision of doing something
          exceptional in the World of Sports and Fitness
          as an independent individual. He  began his career
          in sports as a professional basketball player with
          remarkable achievements in basketball and
           involvement in multi-sports activities, 
           Now he is leading his students them to
            championships and developing young talent into professional
            players. His passion for the game is matched only by his commitment
            to helping players improve on and off the court.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Under his guidance, our academy focuses not only on developing
            basketball skills but also on fostering discipline, teamwork, and a
            winning mindset. Whether you’re a beginner or looking to take your
            game to the next level, Saurabh is here to guide you every step
            of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OwnerCoachSection;
