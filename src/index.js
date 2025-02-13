import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL900_SR900,600_.jpg"
      alt=""
      className="image"
    />
  );
};

const Title = () => <h1>The Let them Theory </h1>;
const Author = () => {
  return <h4>Mel Robbins</h4>;
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
