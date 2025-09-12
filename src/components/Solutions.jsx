import React from "react";
import { Clock, BarChart3, Brain, CalendarCheck } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      title: "10+ Hours Saved Weekly",
      description:
        "Stop spending hours building reports—let Zipeline AI do the heavy lifting.",
      icon: Clock,
    },
    {
      title: "15+ Hours Saved Weekly",
      description:
        "No more manually gathering insights or finalizing next steps—your AI analyst does it instantly.",
      icon: BarChart3,
    },
    {
      title: "Available 24/7 for Brainstorming",
      description:
        "Get answers to any questions and brainstorm ideas anytime, day or night.",
      icon: Brain,
    },
    {
      title: "30X Faster Quarterly Plan Creation",
      description:
        "Create a solid plan for the next quarter in minutes instead of hours.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section className="bg-[#071F4E] text-white py-16 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F6CD7A]">
          The Solution
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Our MCP + Your Claude = Your Personal 24x7 Marketing Analyst
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-start bg-[#00143D] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-teal-600/30 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-[#0B4A4A] rounded-xl">
                  <Icon className="w-8 h-8 text-teal-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#F6CD7A]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
