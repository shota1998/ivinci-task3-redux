import React from "react";
import { connect } from "react-redux";

import { getItems } from "../../selectors";

import classes from "./SelectItem.module.css";
import Item from "../Item";

class SelectItem extends React.Component {
  render() {
    return (
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
          {this.props.items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                value={item.value}
                description={item.description}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default connect((state) => ({ items: getItems(state) }))(SelectItem);
