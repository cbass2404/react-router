import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-active">
          Home
        </NavLink>

        <NavLink to="/about-me" activeClassName="nav-active">
          About Me
        </NavLink>

        <NavLink to="/contact-me" activeClassName="nav-active">
          Contact Me
        </NavLink>

        <NavLink to="/blog" activeClassName="nav-active">
          Blog
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
