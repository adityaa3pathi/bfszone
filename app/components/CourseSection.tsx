// components/CoursesSection.tsx
"use client";

import Image from "next/image";
import { Card } from "../../components/ui/card"; 
import { Button } from "../../components/ui/button"; // Assuming you have a button component from shadcn

const courses = [
  {
    title: "Train Like a Pro",
    description: "Enhance your skills with our expertly designed courses.",
    image: "https://res.cloudinary.com/djrrvcvyl/image/upload/v1727637819/badaya-bhai_dw5cgh.jpg",
    alt: "Train like a pro image",
    buttonLabel: "Join Now",
  },
  {
    title: "Master Basketball Techniques",
    description: "Step-by-step guidance from top coaches.",
    image: "https://res.cloudinary.com/djrrvcvyl/image/upload/v1727637819/basketball-techniques_image.jpg", // Placeholder for cloudinary image
    alt: "Basketball techniques image",
    buttonLabel: "Join Now",
  },
];

export const CoursesSection = () => {
  return (
    <section className="w-full bg-blue_gray-700 py-16 sm:py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-white font-domine text-4xl text-center font-semibold">
          Unleash Your Potential
        </p>
        <p className="text-white text-center mt-4 text-lg sm:text-base max-w-3xl mx-auto">
          Discover our comprehensive basketball training courses.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-1">
          {courses.map((course, index) => (
            <Card key={index} className="rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={course.image}
                alt={course.alt}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-6">
                <p className="text-lg text-gray-500 mb-2">Improve Your Skills</p>
                <p className="text-xl font-semibold text-gray-900">
                  {course.title}
                </p>
                <p className="text-gray-700 mt-2">{course.description}</p>
                <Button className="mt-4 bg-orange-500 text-white hover:bg-orange-600">
                  {course.buttonLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
