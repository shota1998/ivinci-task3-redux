import React from "react";

import classes from "./SelectItem.module.css";
import Item from "../Item";

export default class SelectItem extends React.Component {
  render() {
    return (
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
          {this.props.items.map((item) => {
            return (
              <Item
                key={item.id}
                title={item.title}
                value={item.value}
                description={item.description}
                onClickFunc={() => this.props.onClickFunc(item.id)}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
