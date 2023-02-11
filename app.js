import React from "react";
import ReactDOM from "react-dom/client";
const headingh1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "h1",
  },
  "I am Heading H1"
);
const headingh2 = React.createElement(
  "h2",
  {
    id: "heading2",
    key: "h2",
  },
  "I am Heading H2 "
);
/**
 * di
 */
const container = React.createElement("div", { id: "container" }, [
  headingh1,
  headingh2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
