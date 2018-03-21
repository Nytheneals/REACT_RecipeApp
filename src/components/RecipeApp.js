import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
// import "../css/RecipeApp.css"; v
import "../css/style.css";

class RecipeApp extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
