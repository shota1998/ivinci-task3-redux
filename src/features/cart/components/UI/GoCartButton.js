import React from "react";
import { Link } from "react-router-dom";

import classes from "./GoCartButton.module.css"

export default class GoCartButton extends React.Component {
  render() {
    return (
      <div className={classes.actions}>
        <Link to="/cart">
          <button className={classes.button}>
            <span>{this.props.children}</span>
            <span className={classes.badge}>{this.props.purchase}</span>
          </button>
        </Link>
      </div>
    );
  }
}
