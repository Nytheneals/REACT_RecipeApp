import React from "react";
import ReactDOM from "react-dom";
import RecipeApp from "./components/RecipeApp";
// import RecipeInput from "./components/RecipeInput";
// import UpperCaser from "./components/UpperApp/UpperCase";
// import Todo from "./components/TodoApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<RecipeApp />, document.getElementById("root"));
registerServiceWorker();
