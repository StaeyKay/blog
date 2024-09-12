import React, { useState } from "react";
import SubHeader from "../../components/subHeader";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="bg-[#F8F9FA] px-[128px] min-h-screen flex items-center justify-center">
      <form action="" className="space-y-6 items-center w-[400px]">
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-500 mb-1 text-center"
            >
              Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow-md border-none rounded-xl px-4 py-3 outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm text-gray-500 mb-1 text-center"
            >
              Username
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow-md border-none rounded-xl px-4 py-3 outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-500 mb-1 text-center"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-md border-none rounded-xl px-4 py-3 outline-none w-full"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm text-gray-500 mb-1 text-center"
            >
              Password
            </label>
            <input
              type={passwordVisibility ? "text" : "password"}
              id="password"
              className="shadow-md border-none rounded-xl px-4 py-3 outline-none w-full"
            />
            {/* Toggle Eye Icon */}
            <div
              className="absolute top-1/2 right-4 cursor-pointer"
              onClick={handlePasswordVisibility}
            >
              {passwordVisibility ? <EyeOff /> : <Eye />}
            </div>
          </div>
          <div>
            <button className="bg-[#33bbff] px-10 py-3 w-[400px] rounded-xl text-white font-semibold">
              Create account
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <span className="text-[#33bbff] font-semibold hover: cursor-pointer">
              Sign in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
