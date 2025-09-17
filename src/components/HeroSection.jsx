import React, { useState } from "react";
import Form from "./Form.jsx"; 

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    
    setShowForm(true); // show the form
  };

  const closeForm = () => {
    setShowForm(false); // close the popup
  };
  return (
    <section className="bg-[#00143D] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subheading */}

        {/* Image + Form Section */}
        <div className="flex flex-col md:flex-row items-stretch  gap-12">
          {/* Left: Image */}
          <div className="flex flex-col items-stretch basis-[50%] gap-12">
            <div className="flex flex-col items-start h-full text-left justify-between">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F6CD7A] leading-tight">
                Your Marketing Analyst Who Never Sleeps
              </h1>
              <p className=" text-lg md:text-xl text-[#fff]">
                Get insights, brainstorm ideas, and create the plan for the next quarter in minutes with your personal AI marketing analyst.
              </p>
              <div>
                <button className=" text-lg bg-yellow-500 hover:scale-105 hover:shadow-yellow-600/30 transition-all text-white px-5 py-2 rounded-lg font-semibold cursor-pointer" onClick={handleSubmit}>
                  Onboard Today!
                </button>
                
              </div>
            </div>

          </div>

          {/* Right: Form */}
          <div className="flex justify-center md:justify-end md:basis-[51%] items-start self-start">
            <div className="w-full">
              <video
                src={"./linkedin (online-video-cutter.com).mp4"}
                controls
                loop
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ✕
            </button>

            {/* Form */}
            <Form />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
