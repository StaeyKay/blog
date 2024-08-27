import React from 'react'

const BlogCard = (props) => {
    return (
        <div className="flex bg-white overflow-hidden">


            <div className="w-1/3">
                <img
                    alt=""
                    src={props.image}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-4 w-2/3 flex flex-1 flex-col justify-between">
                <div>
                    <h3 className="font-bold text-gray-900">
                        News Needs to Meet Its Audiences Where They Are
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                        Dave Rogers in News
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        Jun 14 • 3 min read
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard