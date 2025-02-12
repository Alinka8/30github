import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL900_SR900,600_.jpg"
      alt=""
    />
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
