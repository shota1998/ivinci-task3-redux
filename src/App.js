import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import classes from "./App.module.css";

import Header from "./components/Header";
import SelectItem from "./components/pages/SelectItem";
import Cart from "./components/pages/Cart";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 0,
          title: "sampleTitle0",
          value: 3.0,
          description: "sampleDescription0",
          quantity: 0,
        },
        {
          id: 1,
          title: "sampleTitle1",
          value: 5.0,
          description: "sampleDescription1",
          quantity: 0,
        },
      ],
    };
  }

  sumQuantity() {
    var sum = 0;
    for (const item of this.state.items) {
      sum += item.quantity;
    }
    return sum;
  }

  addItem(id) {
    this.setState((prev) => {
      prev.items[id].quantity++;
      return prev;
    });
  }

  removeItem(id) {
    this.setState((prev) => {
      if (prev.items[id].quantity !== 0) {
        prev.items[id].quantity--;
      }
      return prev;
    });
  }

  render() {
    return (
      <div>
        <Header totalQuantity={this.sumQuantity()} />
        <Switch>
          <Route
            path="/cart"
            render={() => (
              <Cart
                items={this.state.items}
                addButtonFunc={this.addItem.bind(this)}
                removeButtonFunc={this.removeItem.bind(this)}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <SelectItem
                items={this.state.items}
                onClickFunc={this.addItem.bind(this)}
              />
            )}
          />  
        </Switch>
      </div>
    );
  }
}
