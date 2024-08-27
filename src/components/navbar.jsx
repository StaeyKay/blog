import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import K from "../constants"


const Navbar = () => {
  return (
    <div className='px-32'>
      <div className='flex justify-between items-center'>
        <span className='font-semibold text-[25px]'>Meranda</span>
        <div className='flex'>
          <div className='flex'>
            <FaFacebookF />
            <FaTwitter />
            <IoLogoInstagram />
          </div>

          <div className='flex'>
            <form action="">
              <input type="text" className='shadow-2xl' placeholder='Search...' />
            </form>
            <FaSearch />
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