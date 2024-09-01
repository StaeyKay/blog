import React from 'react'
import { NavLink } from 'react-router-dom'
import K from '../constants'

const Sidebar = () => {
  return (
    <div className='bg-[#ffff00] min-h-screen w-64'>
      <div>Logo div</div>
      <div className='flex flex-col gap-5'>
        {
            K.DASHBOARDLINKS.map((item, index) => (
                <NavLink 
                to ={item.path}
                key={index}>
                <span>{item.icon}</span>
             <span>{item.name}</span>

                </NavLink> 

            ))
        }
    </div>
    </div>
  )
}

export default Sidebar