import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // install lucide-react for icons

const faqs = [
  {
    question: "Where does my ad-account data live?",
    answer:
      "Your ad-account data always stays within Meta (Facebook/Instagram) or Google Ads servers. This app only fetches and displays data securely using APIs, without storing sensitive ad information permanently."
  },
  {
    question: "What can I do with it today?",
    answer:
      "You can monitor campaigns, analyze performance metrics, and set automated workflows or alerts to optimize your ad spend more effectively."
  },
  {
    question: "Can it actually change budgets or duplicate ad-sets for me?",
    answer:
      "Yes. With the right permissions, it can automatically adjust budgets, pause/activate campaigns, or duplicate ad-sets to improve performance."
  },
  {
    question: "Does it work with Google Ads or HubSpot?",
    answer:
      "Currently it is optimized for Meta Ads. Integrations with Google Ads and HubSpot may be available depending on your plan or upcoming releases."
  },
  {
    question: "How is this different from regular Meta automated rules?",
    answer:
      "Unlike basic automated rules, this system uses AI-driven logic, allowing more flexible, personalized, and adaptive optimizations instead of static rules."
  },
  {
    question: "Do I need to be a “prompt-engineer”?",
    answer:
      "No. The tool is designed with a simple UI so you don’t need technical expertise. It abstracts away prompts and provides an easy experience."
  },
  {
    question: "Does it create new ads or videos like Icon?",
    answer:
      "No, this tool focuses on optimizing your campaigns. It does not generate creative assets like images or videos."
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your usage and plan. Some tiers may be free for limited use, while advanced automation comes under paid plans."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#000]">
        Frequently Asked Questions
      </h2>
      <div className="bg-[#00143D] rounded-2xl shadow-md p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#A6E3E9] py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-medium cursor-pointer text-[#fff]"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-[#71C9CE]" />
              ) : (
                <Plus className="w-5 h-5 text-[#71C9CE]" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-[#fff]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
