import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = (id) => ({
  type: ADD_ITEM,
  payload: id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
