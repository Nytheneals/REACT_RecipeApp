import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const { title } = this.props; // Destructuring this is the same as const title = this.props.title
    const { ingredients } = this.props;
    const ing = ingredients.map((ingred, index) => <li key={index}>{ingred}</li>);
    return (
      <div className="App">
        <h3>Recipe {title}</h3>
        <h2>ingredients</h2>
        <ul>{ing}</ul>
      </div>
    );
  }
}

export default Recipe;
