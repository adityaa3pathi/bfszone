import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose a Course",
      description: "Select the course that matches your skill level.",
    },
    {
      number: "2",
      title: "Start Training",
      description: "Follow our step-by-step video lessons.",
    },
    {
      number: "3",
      title: "Track Progress",
      description: "Monitor your improvement and get feedback.",
    },
  ];

  return (
    <div className="bg-gray-200 text-white px-5 py-10">
      <div className="mx-auto w-3/4 md:w-3/4 lg:w-1/2">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl text-gray-800 font-bold mb-10">How It Works</h1>
        </div>
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start space-x-4">
                <div className="text-9xl sm:text-9xl font-light text-pink-100 ">
                  {step.number}
                </div>
                <div>
                  <h2 className="text-3xl sm:text-xl text-gray-800 px-6 font-semibold">{step.title}</h2>
                  <p className=" text-2xl sm:text-lg text-gray-700 px-6 py-8">{step.description}</p>
                </div>
              </div>
              {index < steps.length  && <hr className="border-pink-500" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
