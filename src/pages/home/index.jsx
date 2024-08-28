import React from 'react'
import Hero from './components/hero'
import Trending from './components/trending'
import Politics from './components/politics'
import { blog1, blog2 } from '../../assets'
import RecentNews from './components/recentNews'

const Home = () => {
  return (
    <div className='space-y-10'>
      <Hero />
      <Trending />
      <Hero/>
      <Politics image={blog1}/>
      <RecentNews image={blog2}/>
    </div>
  )
}

export default Home
