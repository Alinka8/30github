import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

//setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL900_SR900,600_.jpg",
    title: "The let them theory",
    author: "Mel Robbins",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/419CqGgAdZL._SY445_SX342_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wZXiu4OiL._AC_UL210_SR195,210_.jpg",
    title: "The psychology of money",
    author: "Morgan Housel",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;

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
