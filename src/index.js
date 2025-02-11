import React from "react";
import ReactDom from "react-dom/client";

function Greeting() {
  return <h4></h4>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting />);
