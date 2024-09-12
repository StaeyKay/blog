import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { saveUser } from "../../utils";

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const saveSignup = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      console.log(name);
      console.log(username);

      const user = await saveUser(newUser);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F8F9FA] px-[128px] min-h-screen flex items-center justify-center">
      <form onSubmit={saveSignup} className="space-y-6 items-center w-[400px]">
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
              id="name"
              className="shadow-md border-none rounded-xl px-4 py-3 outline-none w-full"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
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
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              required
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              value={password}
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
