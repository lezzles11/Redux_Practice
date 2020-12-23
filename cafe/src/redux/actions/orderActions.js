import { ADD_ORDER } from "./types";

// add order
export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});
