import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe
          title="Pasta"
          ingredients={["Water", "Garlic"]}
          instructions="Mix ingredients"
          img="pasta.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
