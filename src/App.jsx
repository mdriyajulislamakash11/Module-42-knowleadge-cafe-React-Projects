import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMaks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const hanleBookark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMaks(newBookMarks);
  };

  const hanleBookReadingTime = (time) => {
    const newReading = readingTime + time;
    setReadingTime(newReading)
  }

  return (
    <>
      <Header />

      <div className="md:flex max-w-7xl mx-auto">
        <Blogs  hanleBookark={hanleBookark} hanleBookReadingTime={hanleBookReadingTime} />
        <BookMarks bookMarks={bookMarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
