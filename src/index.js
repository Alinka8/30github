import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

import { data } from "./books";
import Book from "./Book";
import { greetings } from "./testing/testing";
import NavBar from "./navBar/NavBar";

//setup vars

function BookList() {
  console.log(greetings);
  return (
    <div>
      <section className="booklist">
        {data.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
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
