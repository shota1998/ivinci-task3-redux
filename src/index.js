import React from "react";
import ReactDOM from "react-dom";
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
);
