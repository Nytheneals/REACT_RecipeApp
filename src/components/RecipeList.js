import React, { Component } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
// import "../css/RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
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
          "pepper"
        ],
        img: "sushi.jpeg"
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return <div className="recipe_card">{recipes}</div>;
  }
}

export default RecipeList;
