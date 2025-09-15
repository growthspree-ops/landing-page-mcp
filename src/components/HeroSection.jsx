import React from "react";
import Form from "./Form.jsx"; 

const HeroSection = () => {
  return (
    <section className="bg-[#00143D] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subheading */}

        {/* Image + Form Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex flex-col basis-[50%] gap-12">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F6CD7A] leading-tight">
                Your Marketing Analyst Who Never Sleeps
              </h1>
              <p className="mt-4 text-lg md:text-xl text-[#fff]">
                Harness the power of Claude AI and open-source technology to make data-driven decisions and boost your ad results.
              </p>
              <p className="mt-2 text-lg font-semibold text-[#fff]">
                Onboard Today!
              </p>
            </div>

            <div className="flex justify-center md:justify-start md:basis-[49%]">
              <img
                src="https://cdn.scrapfly.io/static/blog/posts/how-to-build-an-mcp-server-in-python-a-complete-guide/feature-light.svg?v=ac4f0765"
                alt="AI Marketing Analyst"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
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
