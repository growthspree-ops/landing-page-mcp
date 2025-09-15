import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // install lucide-react for icons

const faqs = [
  {
    question: " What is Google Ads MCP?",
    answer:
      "Google Ads MCP (Model Context Protocol) is a modern, AI-integrated layer built to make managing, optimizing, and analyzing your Google Ads campaigns smarter, faster, and more intuitive."
  },
  {
    question: "How is this different from Google's MCC (My Client Center)?",
    answer:
      "While MCC gives you access to multiple accounts, MCP adds AI-driven intelligence, contextual understanding, and automated insights on top of that data. It’s like MCC, but supercharged."
  },
  {
    question: " Who is this platform for?",
    answer: `The platform is ideal for:
<ul class="list-disc list-inside text-white style="margin-top:8px; margin-left:20px; line-height:1.6;">
  <li>Agencies managing multiple clients</li>
  <li>PPC professionals and freelancers</li>
  <li>Growth marketers and in-house teams</li>
  <li>Anyone looking to reduce manual ad analysis and boost performance</li>
</ul>`
  },
  {
    question: "What role does Claude play in MCP?",
    answer:
      `Claude is integrated directly into the platform to help:
<ul class="list-disc list-inside text-white style="margin-top:8px; margin-left:20px; line-height:1.6;">
  <li>Analyze campaign performance</li>
  <li>Surface optimization opportunities</li>
  <li>Interpret performance metrics in plain English</li>
  <li>Generate ad copy or A/B test variants</li>
  <li>Answer your marketing questions conversationally</li>
</ul>`
  },
  {
    question: "Can Claude suggest improvements to my campaigns?",
    answer:
      "Yes! Claude can recommend bid adjustments, pause underperforming keywords, highlight low-ROAS campaigns, and even suggest new audiences to test — all based on your data."
  },
  {
    question: "Will Claude generate an ad copy?",
    answer:
      "No, this is not supported in current version"
  },
  {
    question: " Does Claude understand natural language?",
    answer:
      `Absolutely. Ask questions like:
<ul class="list-disc list-inside text-white style="margin-top:8px; margin-left:20px; line-height:1.6;">
  <li>"Which campaigns dropped in performance last week?"</li>
  <li>"What ad creatives are converting best?"</li>
  <li>"Give me 3 new headline variations for my top-performing ad set."</li>
  <li>Generate ad copy or A/B test variants</li>
  <li>Answer your marketing questions conversationally</li>
</ul>`
  },
  {
    question: "What kind of insights does MCP provide?",
    answer:
      `You get:
<ul class="list-disc list-inside text-white style="margin-top:8px; margin-left:20px; line-height:1.6;">
  <li>"Real-time campaign insights"</li>
  <li>"AI-powered recommendations"</li>
  <li>"Natural language reporting"</li>
  <li>Budget efficiency analysis</li>
  <li>ROAS trends and forecasts</li>
</ul>`
  },
  {
    question: "Can I connect multiple Google Ads accounts?",
    answer:
      "Yes. The platform supports unlimited Google Ads account connections using your Google MCC."
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "Not at all. The interface is user-friendly, and Claude simplifies everything by letting you query your data conversationally."
  },
  {
    question: " Is reporting included?",
    answer:
      "Yes. Generate one-click reports for internal use or clients. You can even ask Claude to summarize performance in bullet points or in a client-ready paragraph format."
  },
  {
    question: "Is my Google Ads data secure?",
    answer:
      "Yes. We use industry-standard encryption (TLS/SSL), secure OAuth 2.0 authentication, and follow best practices for data storage and access control."
  },
  {
    question: "Is my data used to train Claude or other models?",
    answer:
      "No. Your data is never used to train AI models, including Claude. All processing happens securely within your session."
  },
  {
    question: "Is there a free trial available and what is the cost?",
    answer:
      "This is an open source version and fully free, which will be hosted on your desktop"
  },
  {
    question: "How long does setup take?",
    answer:
      "You can be up and running in under 5 minutes. Simply connect your Google Ads account and start receiving insights instantly."
  },
  {
    question: "Do you offer onboarding support?",
    answer:
      "Yes. Book a 15 minutes call with us here -"
  },
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
              <div className="mt-3 text-[#fff]" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
