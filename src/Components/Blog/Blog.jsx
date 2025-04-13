import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, hanleBookark, hanleBookReadingTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-full"
        src={cover}
        alt={`cover picture titlle ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex my-7">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl mb-2">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read</span>
          <button
            onClick={() => hanleBookark(blog)}
            className="ml-2 text-red-500 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>

      <p className="my-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=""></a>#{hash}
          </span>
        ))}
      </p>

      <button
      onClick={() => hanleBookReadingTime(reading_time)}
      className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
