import { FilePenLine, Plus, Trash, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getArticles, saveArticle } from "../../../utils";

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [file, setFile] = useState(null);
  const [articleList, setArticleList] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setAuthor("");
    setCategory("");
    setDate("");
    setReadTime("");
    setFile("");
  };

  const saveBlogPost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("date", date);
      formData.append("readTime", readTime);
      formData.append("image", file);

      const article = await saveArticle(formData);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getArticles().then((articleList) => {
    //   setArticleList(articleList);
    // });
    const fetchArticles = async () => {
      const articleList = await getArticles();
      setArticleList(articleList);
    };
    fetchArticles();
  }, []);

  return (
    <div className="p-10 w-full">
      <div className="bg-[#1a1a1a] text-white rounded-lg p-8 h-full flex flex-col space-y-4 items-center">
        <h1 className="text-[#33bbff] font-bold text-2xl">Blogs</h1>
        <p className="text-xl">Manage and add your blogs here</p>
        <div className=" text-black text-lg">
          <button
            className="bg-[#33bbff] rounded-lg px-5 py-1 flex items-center gap-3"
            onClick={toggleForm}
          >
            {showForm ? <X size={20} /> : <Plus size={20} />}
            {showForm ? "Cancel" : "Add New Blog"}
          </button>
        </div>

        {showForm && (
          <div className="p-10 md:w-full">
            <div className="bg-[#1a1a1a] text-white rounded-lg p-8 h-full space-y-4 items-center">
              <form
                onSubmit={saveBlogPost}
                className="bg-[#36454F] p-10 space-y-2"
              >
                <label htmlFor="" className="block">
                  Title:
                </label>
                <input
                  type="text"
                  className="shadow-md rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  required
                />
                <label htmlFor="" className="block">
                  Content:
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow-md border-none rounded-lg px-4 py-3 outline-none w-full text-black"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  value={content}
                  required
                ></textarea>
                <label htmlFor="" className="block">
                  Author:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  value={author}
                  required
                />
                <label htmlFor="" className="block">
                  Category:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                  required
                />
                <label htmlFor="" className="block">
                  Date:
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  value={date}
                  required
                />
                <label htmlFor="" className="block">
                  Read time:
                </label>
                <input
                  type="text"
                  className="shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setReadTime(e.target.value);
                  }}
                  value={readTime}
                  required
                />
                <label htmlFor="myfile" className="block">
                  Select a file:
                </label>
                <input
                  type="file"
                  id="myfile"
                  name="myfile"
                  className="bg-white shadow-md border-none rounded-lg px-4 py-2 outline-none text-black"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <button
                  type="submit"
                  className="bg-[#33bbff] rounded-lg px-4 py-1 flex items-center gap-2 text-black"
                >
                  <Plus />
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="space-y-5 w-full">
          {articleList.length === 0 && <h3>No articles found</h3>}
          {articleList.map((blogpost, index) => {
            return (
              <div
                key={index}
                className="bg-[#36454F] rounded-md text-white p-6 flex justify-between"
              >
                <div>
                  <h3>{blogpost.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed">
                    {blogpost.content}
                  </p>
                  <p className="text-sm mt-2">
                    {blogpost.author} in {blogpost.category}
                  </p>
                  <p className="text-sm mt-1">
                    {blogpost.date} • {blogpost.readTime} read
                  </p>
                </div>
                <div className="flex gap-2">
                  <FilePenLine size={30} />
                  <Trash size={30} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
