import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import "../css/RecipeApp.css";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
