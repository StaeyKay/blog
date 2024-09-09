import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaSearch, FaBars } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import K from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-5 px-6 md:px-10 lg:px-[128px]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <span className="font-semibold text-[25px]">Meranda</span>

        <div className="flex items-center space-x-5">
          {/* Social Icons and Search */}
          <div className="flex space-x-3">
            <FaFacebookF className="text-lg" />
            <FaTwitter className="text-lg" />
            <IoLogoInstagram className="text-lg" />
          </div>

          {/* Search Input */}
          <div className="flex space-x-2">
            <form action="">
              <input
                type="text"
                className="shadow-md border-none rounded-full px-4 py-1 outline-none w-full md:w-auto"
                placeholder="Search..."
              />
            </form>
            <div className="bg-black p-3 rounded-full">
              <FaSearch className="text-white" />
            </div>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Nav Links for larger screens */}
      <div className="hidden md:flex justify-end space-x-5 mt-5">
        {K.NAVLINKS.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-3 mt-5">
          {K.NAVLINKS.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <div>
        <hr className="text-gray-400 mt-5" />
      </div>
    </div>
  );
};

export default Navbar;
