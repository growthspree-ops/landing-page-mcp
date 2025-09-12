import React from "react";
import Form from "./Form.jsx"; 

const HeroSection = () => {
  return (
    <section className="bg-[#E3FDFD] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subheading */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#071E3D] leading-tight">
            Your Marketing Analyst Who Never Sleeps
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#055F66]">
            Get insights, brainstorm ideas, and create the plan for the next quarter in minutes with your personal AI marketing analyst.
          </p>
          <p className="mt-2 text-lg font-semibold text-[#0A3F3D]">
            Onboard Today!
          </p>
        </div>

        {/* Image + Form Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start md:basis-[49%]">
            <img
              src="https://cdn.scrapfly.io/static/blog/posts/how-to-build-an-mcp-server-in-python-a-complete-guide/feature-light.svg?v=ac4f0765"
              alt="AI Marketing Analyst"
              className="rounded-xl shadow-xl w-full"
            />
          </div>

          {/* Right: Form */}
          <div className="flex justify-center md:justify-end md:basis-[51%]">
            <div className="w-full">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
