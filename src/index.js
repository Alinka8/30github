import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

import { data } from "./books";
import Book from "./Book";
import { greetings } from "./testing/testing";

//setup vars

function BookList() {
  console.log(greetings);
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };
