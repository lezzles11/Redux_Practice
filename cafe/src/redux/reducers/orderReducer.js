import { ADD_ORDER } from "../actions/types";
const initialState = [
  { id: 1, order: "Coffee", amount: 1 },
  { id: 2, order: "Croissant", amount: 5 },
  { id: 3, order: "Sandwich", amount: 10 },
];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    default:
      console.log("Order reducer hit");
      return state;
  }
};

export default orderReducer;
