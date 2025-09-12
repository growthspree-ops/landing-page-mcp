import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#00143D] flex items-center px-6 py-3 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/logo.png"//👈 Replace with your logo path
          alt="Logo"
          className="w-40 "
        />
      </div>
    </nav>
  );
};

export default Navbar;
