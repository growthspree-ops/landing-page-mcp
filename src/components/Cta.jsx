import React, { useState } from "react";
import Form from "./Form.jsx"; 

const CallToAction = () => {
  const [showForm, setShowForm] = useState(false);
  const closeForm = () => {
    setShowForm(false); // close the popup
  };

  return (
    <div className="flex items-center justify-center  py-20 px-4 bg-[#071F4E]">
      <div className="text-center max-w-xl">
        <h2 className="text-3xl md:text-3xl font-bold text-[#F6CD7A] whitespace-nowrap">
          No More "We'll Get Back to You Tomorrow"
        </h2>
        <p className="mt-3 text-sm md:text-lg text-white">
          Your marketing insights are needed now, not tomorrow. Get your answers today with Zipeline AI.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 px-6 py-3 text-lg bg-yellow-500 hover:scale-105 hover:shadow-yellow-600/30 transition-all  text-white font-semibold rounded-full shadow-md cursor-pointer"
        >
          Get Your Answers Today!
        </button>
      </div>

      {/* Modal with form */}
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
    </div>
  );
};

export default CallToAction;
