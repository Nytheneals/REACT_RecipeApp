import React from "react";
import ReactDOM from "react-dom";
// import RecipeApp from "./components/RecipeApp";
import Random from "./components/Random";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Random />, document.getElementById("root"));
registerServiceWorker();
