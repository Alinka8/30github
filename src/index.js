import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL900_SR900,600_.jpg",
  title: "The let them theory",
  author: "Mel Robbins",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/419CqGgAdZL._SY445_SX342_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolorem nobis corrupti ullam ea dicta, accusamus eaque quae aspernatur
          quo quibusdam quasi, dolore libero quaerat, dolores voluptas! Aliquid,
          quas labore!
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" className="image" />
      <h1> {title}</h1>
      <h4>{author}</h4>
      {props.children}
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
