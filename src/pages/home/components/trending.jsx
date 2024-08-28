import React from 'react'
import K from '../../../constants'
import Cards from './cards'
import BlogCard from './blogCard'
import { blog1, blog2, blog3 } from '../../../assets'
import SubHeader from '../../../components/subHeader'


const Trending = () => {
    return (
        <div className=' py-12'>
            <div className='container'>
                <div className='md:flex md:space-x-6 space-y-8 md:space-y-0'>
                    <div className='md:w-1/3'>
                        <SubHeader title="Editor's Pick" className='mb-4' />
                        {/* <span className="font-semibold text-lg block mb-4">Editor's Pick</span> */}
                        <Cards />
                    </div>
                    <div className='space-y-8 md:w-1/3'>
                        <SubHeader />
                        <BlogCard image={blog1}/>
                        <BlogCard image={blog2}/>
                        <BlogCard image={blog3}/>
                    </div>
                    
                    <div >
                        <SubHeader title="Editor's Pick" />
                        <div className="space-y-8 -mt-2">

                            {K.ARTICLES.map((article, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="text-gray-300 font-bold text-4xl">{`0${index + 1}`}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {article.author} in {article.category}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {article.date} • {article.readTime} read
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending