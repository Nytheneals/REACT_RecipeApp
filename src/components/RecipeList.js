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
      },
      {
        title: "SUSHI",
        instructions: [
          "Toast bread.",
          "Slice avocado and spread on bread.",
          "Add salt, oil, and pepper to taste."
        ],
        ingredients: [
          "2 slices of bread",
          "1 avocado",
          "1 tablespoon olive oil",
          "1 pinch of salt",
          "Pepper"
        ],
        img: "sushi.jpeg"
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
