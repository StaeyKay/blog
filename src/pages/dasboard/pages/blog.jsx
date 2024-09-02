import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className="p-10 w-full">
      <div className="bg-[#1a1a1a] text-white rounded-lg p-8 h-full flex flex-col space-y-4 items-center">
        <h1 className="text-[#33bbff] font-bold text-2xl">Blogs</h1>
        <p className="text-xl">Manage and add your blogs here</p>
        <div className=" text-black text-lg">
          <button
            className="bg-[#33bbff] rounded-lg px-5 py-1 flex items-center gap-3"
            onClick={toggleForm}
          >
            {showForm ? <X size={20} /> : <Plus size={20} />}
            {showForm ? "Cancel" : "Add New Blog"}
          </button>
        </div>

        {showForm && (
          <div className="p-10 md:w-full">
            <div className="bg-[#1a1a1a] text-white rounded-lg p-8 h-full space-y-4 items-center">
              <form action="" onSubmit={handleForm} className="bg-[#36454F] p-10 space-y-2">
                <label htmlFor="" className="block">
                  Title:
                </label>
                <input
                  type="text"
                  className="shadow-md rounded-lg px-4 py-2 outline-none text-black"
                />
                <label htmlFor="" className="block">
                  Content:
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow-md border-none rounded-lg px-4 py-3 outline-none w-full text-black"
                ></textarea>
                <label htmlFor="" className="block">
                  Author:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                />
                <label htmlFor="" className="block">
                  Category:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                />
                <label htmlFor="" className="block">
                  Date:
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                />
                <label htmlFor="" className="block">
                  Read time:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                />
                <button
                  type="submit"
                  className="bg-[#33bbff] rounded-lg px-4 py-1 flex items-center gap-2 text-black"
                >
                  <Plus />
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="space-y-5 w-full">
          <div className="bg-[#36454F] rounded-md text-white p-6">
            <h3>News Needs to Meet Its Audiences Where They Are</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <p className="text-sm mt-2">Dave Rogers in Politics</p>
            <p className="text-sm mt-1">June 14 • 3 min read</p>
          </div>
          <div className="bg-[#36454F] rounded-md text-white p-6">
            <h3>News Needs to Meet Its Audiences Where They Are</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <p className="text-sm mt-2">Dave Rogers in Politics</p>
            <p className="text-sm mt-1">June 14 • 3 min read</p>
          </div>
          <div className="bg-[#36454F] rounded-md text-white p-6">
            <h3>News Needs to Meet Its Audiences Where They Are</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <p className="text-sm mt-2">Dave Rogers in Politics</p>
            <p className="text-sm mt-1">June 14 • 3 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
