import React from "react";

import classes from "./CartItem.module.css";
import ChangeQuantityButton from "./UI/ChangeQuantityButton ";

export default class CartItem extends React.Component {
  render() {
    return (
      <li className={classes.item}>
        <header>
          <h3>{this.props.title}</h3>
          <div className={classes.price}>
            ${this.props.value * this.props.quantity}
            <span className={classes.itemprice}>
              (${this.props.value}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{this.props.quantity}</span>
          </div>
          <div className={classes.actions}>
            <ChangeQuantityButton onClick={this.props.removeButtonFunc}>
              -
            </ChangeQuantityButton>
            <ChangeQuantityButton onClick={this.props.addButtonFunc}>
              +
            </ChangeQuantityButton>
          </div>
        </div>
      </li>
    );
  }
}
