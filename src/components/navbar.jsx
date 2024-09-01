import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import K from "../constants"


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='py-10 space-y-10 px-[128px]'>
      <div className='flex justify-between items-center'>
        <span className='font-semibold text-[25px]'>Meranda</span>
        <div className='flex justify-between items-center space-x-5'>
          <div className='flex space-x-3'>
            <FaFacebookF className='text-lg' />
            <FaTwitter className='text-lg' />
            <IoLogoInstagram className='text-lg' />
          </div>

          <div className='flex space-x-2'>
            <form action="">
              <input type="text" className='shadow-md border-none rounded-full px-4 py-1 outline-none' placeholder='Search...' />
            </form>
            <div className='bg-black p-3 rounded-full'>
              <FaSearch className='text-white' />
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
      <button
       onClick={() => navigate("/dashboard")}
       className='bg-gray-400 rounded-lg px-10 py-4 text-black'>
        Click me!
      </button>
      <Link to="/dashboard" className='bg-gray-400 rounded-lg px-10 py-4 text-black'>Click me</Link>
      <div>
        <hr className='text-gray-400 px-0'/>
      </div>
    </div>
  )
}

export default Navbar