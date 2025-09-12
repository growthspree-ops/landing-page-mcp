import Footer from '../src/components/Footer.jsx'
import FAQ from '../src/components/Faq.jsx'
import Navbar from '../src/components/Navbar.jsx'

export default function ThankYou() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {});
  };
  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-[#E3FDFD] text-gray-800 flex flex-col items-center px-4 py-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-2">
            Welcome to Growthspree
        </h1>
        <h2 className="text-lg font-semibold mb-6 w-full max-w-4xl">
            1. Setup Instructions
        </h2>
        <p className="text-sm max-w-4xl mb-10 text-[#71C9CE]">
            Choose the setup method that works best for you based on your Claude
            subscription. You’ll also receive detailed setup instructions in your
            mailbox! (May take upto 10 minutes)
        </p>
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Pro/Max Users */}
            <div className="bg-[#CBF1F5] rounded-lg p-6 shadow-lg border border-[#71C9CE]">
            <h2 className="text-center text-lg font-semibold mb-4">
                For Claude Pro/Max Users
            </h2>
            <p className="text-xs text-center text-[#71C9CE] mb-4">
                Only for Paid Claude Users who want the simplest setup experience
                with cloud-based integration
            </p>
            <div className="aspect-video bg-black mb-4 rounded overflow-hidden">
                {/* Placeholder video */}
                <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video tutorial"
                className="w-full h-full"
                allowFullScreen
                ></iframe>
            </div>
            <ul className="text-sm space-y-2 list-disc pl-5">
                <li>
                Open{" "}
                <span className="text-[#71C9CE]">
                    claude.ai/settings/integrations
                </span>{" "}
                in your browser
                </li>
                <li>
                Add Integration Name:{" "}
                <span className="font-bold">GoMarble AI</span>
                </li>
                <li>
                Add Integration URL:{" "}
                <span className="text-[#71C9CE] break-all">
                    https://apps.gomarble.ai/mcp-apis/...
                </span>
                <button className="ml-2 px-2 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300">
                    Copy URL
                </button>
                </li>
                <li>Click “Add” and then “Connect”</li>
                <li>
                Go to apps.gomarble.ai and login using your Google Account or
                Email ID
                </li>
                <li>Connect your Ad Accounts and other integrations</li>
                <li>Start using GoMarble in Claude</li>
            </ul>
            <button className="w-full mt-6 bg-[#71C9CE] hover:bg-[#A6E3E9] text-white font-semibold py-3 rounded-lg">
                Go to Claude Integrations
                <div className="text-xs opacity-75">
                requires Claude Paid Subscription
                </div>
            </button>
            </div>
            {/* Free Users */}
            <div className="bg-[#CBF1F5] rounded-lg p-6 shadow-lg border border-[#71C9CE]">
            <h2 className="text-center text-lg font-semibold mb-4">
                For Claude (Free Plan) Users
            </h2>
            <p className="text-xs text-center text-[#71C9CE] mb-4">
                Local Installation Required. Limited queries/day due to Claude Free
                Plan
            </p>
            <div className="aspect-video bg-black mb-4 rounded overflow-hidden">
                {/* Placeholder video */}
                <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video tutorial"
                className="w-full h-full"
                allowFullScreen
                ></iframe>
            </div>
            <ul className="text-sm space-y-2 list-disc pl-5">
                <li>Ensure Claude Desktop is installed</li>
                <li>Connect your Ad Accounts on Integrations Setup Page</li>
                <li>
                Click on your profile picture on top right and copy your API Key
                </li>
                <li>Download Installer (DXT file)</li>
                <li>
                Go to Claude Desktop Settings → Extensions and drag and drop the
                DXT file
                </li>
                <li>Click Install and paste your API Key</li>
                <li>Enable your GoMarble Extension</li>
            </ul>
            <div className="flex flex-col gap-3 mt-6">
                <button className="w-full bg-[#71C9CE] hover:bg-[#A6E3E9] text-white font-semibold py-3 rounded-lg">
                Download Claude Desktop
                </button>
                <button className="w-full bg-[#A6E3E9] hover:bg-[#71C9CE] text-white font-semibold py-3 rounded-lg">
                Download GoMarble DXT
                <div className="text-xs opacity-75">takes – 2 minutes</div>
                </button>
            </div>
            </div>
        </div>
        {/* step two */}
        <div className="bg-[#A6E3E9] text-gray-800 px-6 py-10 flex flex-col items-center mt-10 rounded-lg w-full">
            {/* Section Title */}
            <h2 className="text-lg font-semibold mb-6 w-full max-w-4xl">
            2. Test your MCP setup
            </h2>
            {/* Screenshot */}
            <div className="w-full max-w-4xl mb-8">
            <img
                src="https://framerusercontent.com/images/26B3yJk4O2Kvuh4u7kq5ITJ00E.gif"
                alt="MCP Setup Example"
                className="rounded-lg shadow-lg border border-[#71C9CE]"
            />
            </div>
            {/* Prompts Section */}
            <div className="w-full max-w-4xl space-y-3">
            {[
                "Give me the ROAS of my Facebook Ad Accounts in the past week",
                "Analyze which audience segments have the highest ROAS across Facebook Ads and Google Ads",
                "Generate a weekly performance report comparing my Google Ads and Facebook Ads campaigns",
            ].map((prompt, idx) => (
                <div
                key={idx}
                className="bg-[#CBF1F5] px-4 py-3 rounded flex justify-between items-center border border-[#71C9CE]"
                >
                <span className="text-sm">{prompt}</span>
                <button
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded cursor-pointer"
                    onClick={() => handleCopy(prompt)}
                >
                    Copy Prompt
                </button>
                </div>
            ))}
            </div>
            {/* Questions Section */}
            <div className="w-full max-w-4xl mt-10">
            <h3 className="font-bold text-lg mb-2">Still Have questions?</h3>
            <p className="text-sm text-gray-700">
                Join our{" "}
                <a href="#" className="text-[#71C9CE] underline">
                Slack community
                </a>{" "}
                or reply to the onboarding email — founders Palash & Aditya
                personally answer setup and strategy queries.
            </p>
            </div>
        </div>
        </div>
        <FAQ />
        <Footer />
    </>
  );
}