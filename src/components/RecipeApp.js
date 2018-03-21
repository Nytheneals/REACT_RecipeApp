import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
// import "../css/RecipeApp.css"; v

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
