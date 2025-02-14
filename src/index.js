import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

//setup vars
const author = "Mel Robbins";
const title = "The Let them Theoryyyyy";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL900_SR900,600_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" className="image" />
      <h1> {title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };
