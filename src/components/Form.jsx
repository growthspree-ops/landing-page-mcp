import React, { useState } from "react";
import { useNavigate } from "react-router";


const HubspotForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    hs_role: "",
    website: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    try {
      
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/21984071/08cce701-15c9-4839-abe9-b70afadd256d", // 🔗 Replace with your HubSpot Form URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: formData.firstname },
              { name: "lastname", value: formData.lastname },
              { name: "email", value: formData.email },
              { name: "hs_role", value: formData.hs_role },
              { name: "website", value: formData.website },
            ],
          }),
        }
      );

      
      if (response.ok) {
        setStatus("✅ Form submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          hs_role: "",
          website: "",
        });
        navigate("/thank-you");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("⚠️ Error submitting form.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg border border-teal-200"
      >
        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Jane"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border-teal-300 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Smith"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border-teal-300 text-gray-800"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-teal-800 font-medium mb-2">
            What email should we send the setup instructions to?
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jon@jonloomer.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border-teal-300 text-gray-800"
          />
        </div>

        {/* hs_role */}
        <div className="mt-4">
          <label className="block text-teal-800 font-medium mb-2">
            Your current role is
          </label>
          <select
            name="hs_role"
            value={formData.hs_role}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border-teal-300 text-gray-800 bg-white"
          >
            <option value="" className="text-gray-500">
              Select...
            </option>
            <option value="Developer" className="text-gray-800 hover:bg-teal-100">
              Developer
            </option>
            <option value="Manager" className="text-gray-800 hover:bg-teal-100">
              Manager
            </option>
            <option value="Founder" className="text-gray-800 hover:bg-teal-100">
              Founder
            </option>
          </select>
        </div>

        {/* Website */}
        <div className="mt-4">
          <label className="block text-teal-800 font-medium mb-2">
            Please share your company Website URL
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="www.brandname.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border-teal-300 text-gray-800"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full bg-[#F6CD7A] hover:bg-[#F6CD7A] text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Submit
        </button>
      

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  );
};

export default HubspotForm;
