import React, { Component } from "react";
// import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="nav ">
        <div className="item2 logo">
          COOK <i className="fa fa-cutlery" aria-hidden="true" /> EAT
        </div>
        <div className="item">New Recipe</div>
        <div className="item ">Home</div>
        <div className="item ">About</div>
        <div className="item ">Contact Us</div>
      </div>
    );
  }
}

export default Navbar;
