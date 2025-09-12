import React from "react";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 md:px-16"
      style={{ background: "linear-gradient(to bottom, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)" }}
    >
      <div className="max-w-7xl mx-auto text-gray-700">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#071E3D" }}>
              We Would Love To Hear From You
            </h2>
            <p className="text-gray-500 mb-4" style={{ color: "#033F4D" }}>
              Please reach out to us for any questions and feedbacks
            </p>
            <a
              href="mailto:contact@growthspree.in"
              className="flex items-center gap-2 font-semibold hover:text-teal-600"
              style={{ color: "#0A3F3D" }}
            >
              contact@growthspree.in <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#033F4D" }}>
              Our Address
            </h3>
            <p className="mb-2" style={{ color: "#055F66" }}>
              B-117, Sector 2, Noida, Uttar Pradesh 201301
            </p>
            <p className="font-medium" style={{ color: "#071E3D" }}>+91 70456 38498</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#033F4D" }}>
              Follow Us
            </h3>
            <p className="mb-3" style={{ color: "#055F66" }}>growthspreeofficial</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-500 transition" style={{ color: "#0A3F3D" }}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition" style={{ color: "#0A3F3D" }}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition" style={{ color: "#0A3F3D" }}>
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm" style={{ color: "#033F4D" }}>
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
