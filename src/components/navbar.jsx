import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import K from "../constants"


const Navbar = () => {
  return (
    <div className='py-10 space-y-10'>
      <div className='flex justify-between items-center'>
        <span className='font-semibold text-[25px]'>Meranda</span>
        <div className='flex justify-between items-center space-x-5'>
          <div className='flex space-x-3'>
            <FaFacebookF className='text-lg' />
            <FaTwitter className='text-lg'/>
            <IoLogoInstagram className='text-lg'/>
          </div>

          <div className='flex space-x-2'>
            <form action="">
              <input type="text" className='shadow-md border-none rounded-full px-4 py-1 outline-none' placeholder='Search...' />
            </form>
            <div className='bg-black p-3 rounded-full'>
            <FaSearch className='text-white'/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-10">
        {K.NAVLINKS.map(
          (item, index) => {
            return <Link key={index} to={item.path}>{item.name}</Link>
          }
        )
        }
      </div>
    </div>
  )
}

export default Navbar