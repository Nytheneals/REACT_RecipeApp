import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">RECIPE APP</h1>
        <Recipe
          title="Pasta"
          ingredients={['Water', 'Garlic']}
          instructions="Mix ingredients"
          img="QKFxPAw.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
