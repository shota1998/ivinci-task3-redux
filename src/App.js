import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import classes from "./App.module.css";

import Header from "./components/Header";
import SelectItem from "./components/pages/SelectItem";
import Cart from "./components/pages/Cart";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/" render={() => <SelectItem />} />
        </Switch>
      </div>
    );
  }
}
