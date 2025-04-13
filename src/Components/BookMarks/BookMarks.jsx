import React from "react";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-blue-400 p-3 m-3 ">
        <h3 className="text-white">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-2xl font-bold  text-center">
        book marks blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark, indx) => (
        <BookMark key={indx} bookMark={bookMark} />
      ))}
    </div>
  );
};

export default BookMarks;
