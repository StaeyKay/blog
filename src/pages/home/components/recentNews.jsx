import React from 'react'
import K from '../../../constants'
import SubHeader from '../../../components/subHeader'

const RecentNews = ({ image }) => {
    return (
        <div className='md:flex justify-between'>
            <div className='space-y-5 md:w-[75%]'>
                <SubHeader title="Recent News" />
                <div className="flex bg-white overflow-hidden">
                    <div className="py-4 w-2/3 flex flex-1 flex-col justify-between">
                        <div>
                            <h3 className="text-gray-900">
                                News Needs to Meet Its Audiences Where They Are
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Dave Rogers in News
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Jun 14 • 3 min read
                            </p>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <img
                            alt=""
                            src={image}
                            className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="flex bg-white overflow-hidden">
                    <div className="py-4 w-2/3 flex flex-1 flex-col justify-between">
                        <div>
                            <h3 className="text-gray-900">
                                News Needs to Meet Its Audiences Where They Are
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Dave Rogers in News
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Jun 14 • 3 min read
                            </p>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <img
                            alt=""
                            src={image}
                            className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="flex bg-white overflow-hidden">
                    <div className="py-4 w-2/3 flex flex-1 flex-col justify-between">
                        <div>
                            <h3 className="text-gray-900">
                                News Needs to Meet Its Audiences Where They Are
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Dave Rogers in News
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Jun 14 • 3 min read
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img
                            alt=""
                            src={image}
                            className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
            <div >
                <SubHeader title="Popular Posts" />
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
    )
}

export default RecentNews