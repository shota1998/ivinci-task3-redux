import React from "react";

import classes from "./AddCartButton.module.css"

export default class AddCartButton extends React.Component {
  render() {
    return (
      <div className={classes.actions}>
        <button onClick={this.props.onClickFunc}>{this.props.children}</button>
      </div>
    );
  }
}
