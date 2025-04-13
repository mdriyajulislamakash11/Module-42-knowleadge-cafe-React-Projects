import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMaks] = useState([])

  const hanleBookark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMaks(newBookMarks);
  };

  return (
    <>
      <Header />

      <div className="md:flex max-w-7xl mx-auto">
        <Blogs  hanleBookark={hanleBookark} />
        <BookMarks bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
