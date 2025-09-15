import React from "react";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 md:px-16 bg-[#00143D]"
      
    >
      <div className="max-w-7xl mx-auto text-white">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2" >
              We Would Love To Hear From You
            </h2>
            <p className="text-gray-500 mb-4" >
              Please reach out to us for any questions and feedbacks
            </p>
            <a
              href="mailto:contact@growthspree.in"
              className="flex items-center gap-2 font-semibold hover:text-teal-600"
              
            >
              contact@growthspree.in <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Our Address
            </h3>
            <p className="mb-2" >
              B-117, Sector 2, Noida, Uttar Pradesh 201301
            </p>
            <p className="font-medium" >+91 70456 38498</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2" >
              Follow Us
            </h3>
            <p className="mb-3" >growthspreeofficial</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/growthspreeofficial/" className="hover:text-pink-500 transition" >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/growthspree-digital-marketing-consulting/" className="hover:text-blue-600 transition" >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/thegrowthspree" className="hover:text-blue-400 transition" >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm" >
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Wall Of Fame</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#">Early Stage</a></li>
              <li><a href="#">Scaleup</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#">Creative Studio</a></li>
              <li><a href="#">Google Ads Health Analyzer</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li><a href="#">Hubspot</a></li>
              <li><a href="#">Revops</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
