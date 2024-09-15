import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { saveUser } from "../../utils";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
      <div className="relative mx-auto max-w-[525px] overflow-hidden shadow-2xl rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
        <form
          onSubmit={saveSignup}
          className="space-y-6 items-center w-[400px]"
        >
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
                placeholder="Enter your full name"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
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
                id="username"
                placeholder="Enter a unique username"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
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
                placeholder="Enter a valid email address"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
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
                placeholder="Enter your password"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
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
              <span
                onClick={() => {
                  navigate("/auth/login");
                }}
                className="text-[#33bbff] font-semibold hover: cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
