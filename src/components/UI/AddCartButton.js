import React from "react";
import { connect } from "react-redux";

import classes from "./AddCartButton.module.css";

const AddCartButton = ({ onClick, children }) => (
  <div className={classes.actions}>
    <button onClick={onClick}>{children}</button>
  </div>
);

export default AddCartButton;
