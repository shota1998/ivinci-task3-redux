import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import GoCartButton from "./UI/GoCartButton";

export default class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>ReduxCart</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <GoCartButton purchase={this.props.totalQuantity}>
                My Cart
              </GoCartButton>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
