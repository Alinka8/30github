import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

import { data } from "./books";

//setup vars

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" className="image" />
      <h1 onClick={() => console.log(title)}> {title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        {" "}
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
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
