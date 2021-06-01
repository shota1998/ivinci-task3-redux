import React from "react";

import classes from "./Item.module.css";
import AddCartButton from "./UI/AddCartButton";

class Item extends React.Component {
  render() {
    return (
      <li className={classes.item}>
        <section className={classes.card}>
          <header>
            <h3>{this.props.title}</h3>
            <div className={classes.price}>${this.props.value}</div>
          </header>
          <p>{this.props.description}</p>
          <AddCartButton onClickFunc={this.props.onClickFunc}>
            Add to Cart
          </AddCartButton>
        </section>
      </li>
    );
  }
}

export default Item;
