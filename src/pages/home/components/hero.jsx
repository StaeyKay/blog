import React from "react";
import { heroImage } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/auth/signup");
  };

  const handleLogin = () => {
    navigate("auth/login");
  };

  return (
    <div>
      <div>
        <button
          onClick={handleSignup}
          className="bg-[#F8F9FA] px-5 py-2 font-semibold rounded-lg"
        >
          Sign up
        </button>
        <button
          onClick={handleLogin}
          className="bg-[#F8F9FA] px-5 py-2 font-semibold rounded-lg"
        >
          Login
        </button>
      </div>
      <div className="md:flex">
        <img src={heroImage} alt="" className="md:w-1/2" />
        <div className="bg-[#F8F9FA] flex flex-col p-10">
          <span>EDITOR'S PICK</span>
          <span>New Needs to Meet Its Audiences</span>
          <span>Where They Are</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span>Dave Rogers in Food</span>
          <span>Jun 14 . 3 min</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
