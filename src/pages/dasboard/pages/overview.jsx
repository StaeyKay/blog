import { ChartNoAxesCombined } from 'lucide-react'
import React from 'react'

const Overview = () => {
  return (
    <div className='p-10'>
        <div className='bg-[#1a1a1a] rounded-lg w-[300px] h-[200px] p-5 flex flex-col items-center'>
          <h1 className='text-white font-semibold'>Welcome to your dasboard</h1>
          <ChartNoAxesCombined size={100} className='text-white'/>
        </div>
    </div>
  )
}

export default Overview