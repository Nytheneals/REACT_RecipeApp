import React from "react";
import ReactDOM from "react-dom";
// import RecipeApp from "./components/RecipeApp";
// import RecipeInput from "./components/RecipeInput";
import UpperCaser from "./components/UpperCase";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<UpperCaser />, document.getElementById("root"));
registerServiceWorker();
