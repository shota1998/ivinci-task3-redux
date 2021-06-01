import React from "react";

import classes from "./Cart.module.css";
import CartItem from "../CartItem";

export default class Cart extends React.Component {
  render() {
    return (
      <section className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {this.props.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                title={item.title}
                value={item.value}
                quantity={item.quantity}
                addButtonFunc={() => this.props.addButtonFunc(item.id)}
                removeButtonFunc={() => this.props.removeButtonFunc(item.id)}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
