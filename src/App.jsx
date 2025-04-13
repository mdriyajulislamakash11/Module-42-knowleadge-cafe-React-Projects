import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <div className="md:flex max-w-7xl mx-auto">
        <Blogs />
        <BookMarks />
      </div>
    </>
  );
}

export default App;
