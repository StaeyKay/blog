import React from "react";
import SubHeader from "../components/subHeader";

const NewsPage = ({
  articles,
  popularPosts,
  sectionTitle,
  popularPostsTitle,
}) => {
  return (
    <div className="md:flex justify-between space-x-8 py-10">
      <div className="space-y-5 md:w-[75%]">
        <SubHeader title={sectionTitle} />
        {articles.map((article, index) => (
          <div key={index} className="flex bg-white overflow-hidden">
            <div className="py-4 w-2/3 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="text-gray-900">{article.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {article.content}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {article.author} in {article.category}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {article.date} • {article.readTime} read
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <img
                alt=""
                src={article.image} // Use the image specific to each article
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <SubHeader title={popularPostsTitle} />
        <div className="space-y-8 -mt-2">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-gray-300 font-bold text-4xl">
                {`0${index + 1}`}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {post.author} in {post.category}
                </p>
                <p className="text-sm text-gray-400">
                  {post.date} • {post.readTime} read
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
