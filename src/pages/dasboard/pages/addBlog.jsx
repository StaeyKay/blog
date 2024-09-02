import React from "react";

const AddBlog = () => {
  return (
    <div className="p-10 w-full">
      <div className="bg-[#1a1a1a] text-white rounded-lg p-8 h-full space-y-4 items-center">
        <form action="" className="bg-[#36454F] p-10">
          <label htmlFor="" className="block">
            Title:
          </label>
          <input
            type="text"
            className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
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
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
