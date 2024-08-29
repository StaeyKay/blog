import React from 'react';
import SubHeader from './subHeader';
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#F8F9FA] px-[128px] md:flex items-center justify-between py-8'>
      <div className='md:max-w-md'>
        <SubHeader title="Newsletter Subscribe" />
        <p className="pt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
          mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
      <div className='flex space-x-4 items-center md:ml-8 w-full md:w-auto'>
        <form action="" className='flex-grow'>
          <input 
            type="text" 
            className='shadow-md border-none rounded-full px-4 py-3 outline-none w-full md:w-96' 
            placeholder='Enter your email' 
          />
        </form>
        <button className='bg-black h-12 w-12 rounded-full flex items-center justify-center'>
          <FaSearch className='text-white' />
        </button>
      </div>
    </div>
  );
}

export default Footer;
