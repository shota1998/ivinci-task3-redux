import React from "react";
import { connect } from "react-redux";

import { ADD_ITEM, REMOVE_ITEM } from "../redux/actionTypes";
import { getTotalPurchace } from "../redux/selectors";

import classes from "./CartItem.module.css";
import ChangeQuantityButton from "./UI/ChangeQuantityButton ";

const CartItem = ({ item }) => (
  <li className={classes.item}>
    <header>
      <h3>{item.title}</h3>
      <div className={classes.price}>
        ${item.value * item.quantity}
        <span className={classes.itemprice}>(${item.value}/item)</span>
      </div>
    </header>

    <div className={classes.details}>
      <div className={classes.quantity}>
        x <span>{item.quantity}</span>
      </div>
      <div className={classes.actions}>
        <ChangeQuantityButton id={item.id} actionType={REMOVE_ITEM}>
          -
        </ChangeQuantityButton>
        <ChangeQuantityButton id={item.id} actionType={ADD_ITEM}>
          +
        </ChangeQuantityButton>
      </div>
    </div>
  </li>
);

export default connect((state) => ({
  total: getTotalPurchace(state),
}))(CartItem);
