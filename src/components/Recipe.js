import React, { Component } from "react";
import PropTypes from "prop-types";
// import "../css/Recipe.css";

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    // instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  };

  render() {
    const { title, img, ingredients, instructions } = this.props;
    const ingredient = ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    // console.log(ingredients);
    const instruction = instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));

    // console.log(instructions);
    return (
      <div className="recipe__card">
        <div className="recipe_image">
          <img
            src="https://cdn.makegoodfood.ca/images/lets_get_cooking_image.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className=" _Main _Title">{title}</div>
        <div className="ingred _Title">INGREDIENTS</div>
        <div className="_ingredients">
          <ul>{ingredient}</ul>
        </div>
        <div className="instru _Title">INSTRUCTIONS</div>
        <div className="_instructions">
          <ul>{instruction}</ul>
        </div>
      </div>
    );
  }
}

export default Recipe;
