import React, { Component } from "react";
class RecipeInput extends Component {
  recipeTitle = React.createRef();
  recipeInstructions = React.createRef();
  recipeIngredients = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <form action="">
        <input
          type="text"
          name=""
          id=""
          ref={this.recipeTitle}
          placeholder="Title"
        />
        <input
          type="text"
          name=""
          id=""
          ref={this.recipeInstructions}
          placeholder="Instructions"
        />
        <input
          type="text"
          name=""
          id=""
          ref={this.recipeIngredients}
          placeholder="Ingredients"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default RecipeInput;
