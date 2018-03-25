import React, { Component } from "react";

class UpperCaser extends Component {
  state = {
    name: "nathaneals"
  };

  handleClick = e => {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        name: prevState.name.toUpperCase()
      }));
      console.log("Updated!!!");
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleClick}>UpperCase</button>
      </div>
    );
  }
}

export default UpperCaser;
