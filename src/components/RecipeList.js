import React, { Component } from "react";
import Recipe from "./Recipe";
// import PropTypes from "prop-types";

class RecipeList extends Component {
  state = {
    recipes: [
      {
        title: "PASTA",
        instructions: [
          "Open jar of Spaghetti sauce.",
          "Bring to simmer.",
          "Boil water.  Cook pasta until done.",
          "Combine pasta and sauce"
        ],
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "pasta.jpg"
      },
      {
        title: "STEAK",
        instructions: [
          "Open jar of Spaghetti sauce.",
          "Bring to simmer.",
          "Boil water.  Cook pasta until done.",
          "Combine pasta and sauce"
        ],
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "pasta.jpg"
      },
      {
        title: "PORK BELLY",
        instructions: [
          "Open jar of Spaghetti sauce.",
          "Bring to simmer.",
          "Boil water.  Cook pasta until done.",
          "Combine pasta and sauce"
        ],
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "pasta.jpg"
      },
      {
        title: "TOMHAWK",
        instructions: ["Combine ice cream and milk.", "Blend until creamy"],
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "steak.jpeg"
      }
    ]
  };

  render() {
    const recipes = this.state.recipes.map((r, index) => (
      <Recipe key={r.title} {...r} />
    ));

    return <div className="recipe_card">{recipes}</div>;
  }
}

// static propTypes = {
//   recipes: PropTypes.arrayOf(PropTypes.object)
// };

export default RecipeList;
