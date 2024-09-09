import React from "react";
import { heroImage } from "../../../assets";

const Hero = () => {
  return (
    <div className="md:flex">
      <img src={heroImage} alt="" className="md:w-1/2" />
      <div className="bg-[#F8F9FA] flex flex-col p-10">
        <span>EDITOR'S PICK</span>
        <span>New Needs to Meet Its Audiences</span>
        <span>Where They Are</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span>Dave Rogers in Food</span>
        <span>Jun 14 . 3 min</span>
      </div>
    </div>
  );
};

export default Hero;
