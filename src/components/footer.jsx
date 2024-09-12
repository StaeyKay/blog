import React from "react";
import SubHeader from "./subHeader";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] px-4 md:px-8 lg:px-[128px] py-8 space-y-6 md:space-y-0 md:flex items-center justify-between">
      <div className="md:max-w-md">
        <SubHeader title="Newsletter Subscribe" />
        <p className="pt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 items-center w-full md:w-auto">
        <form action="" className="w-full md:w-auto flex-grow">
          <input
            type="text"
            className="shadow-md border-none rounded-full px-4 py-3 outline-none w-full"
            placeholder="Enter your email"
          />
        </form>
        <button className="bg-black h-12 w-12 mt-4 md:mt-0 rounded-full flex items-center justify-center">
          <FaTelegramPlane className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
