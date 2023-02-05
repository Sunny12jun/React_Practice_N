import React from "react";
import ReactDOM from "react-dom";
const headingh1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "I am Heading H1"
);
const headingh2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "I am Heading H2"
);

const container = React.createElement("div", { id: "container" }, [
  headingh1,
  headingh2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
