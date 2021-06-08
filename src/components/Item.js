import React from "react";

import classes from "./Item.module.css";
import AddCartButton from "./UI/AddCartButton";

const Item = ({ item }) => (
  <li className={classes.item}>
    <section className={classes.card}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>${item.value}</div>
      </header>
      <p>{item.description}</p>
      <AddCartButton id={item.id}>Add to Cart</AddCartButton>
    </section>
  </li>
);

export default Item;
