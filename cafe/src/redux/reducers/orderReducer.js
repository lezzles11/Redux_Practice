import { ADD_ORDER, DELETE_ORDER } from "../actions/types";
const initialState = [
  { id: 1, order: "Coffee", amount: 1 },
  { id: 2, order: "Croissant", amount: 5 },
  { id: 3, order: "Sandwich", amount: 10 },
];
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [
        ...state,
        { ...action.payload, id: generateID(state) },
      ];
    case DELETE_ORDER:
      return state.filter(
        (order) => order.id !== action.payload
      );
    default:
      console.log("Order reducer hit");
      return state;
  }
};
/**********************************************
 * Creating ID
 * ==================================
 * To create an id, pass in state - then, grab the last id that was created, then add one to it
 ***********************************************/
let generateID = (orders) => {
  let lastId = 0;
  if (orders.length > 0) {
    lastId = orders[orders.length - 1].id;
  }
  return ++lastId;
};

export default orderReducer;
