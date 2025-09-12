import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#71C9CE] flex items-center px-6 py-3 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6776747215b7d1c20a23913e/6827222ba47c14520facc74b_Group%201%20(1).webp" // 👈 Replace with your logo path
          alt="Logo"
          className="w-35 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
