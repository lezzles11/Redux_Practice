import { SWITCH_CUSTOMER } from "../actions/types";

let initialState = [
  {
    id: 1,
    name: "John",
    selected: true,
  },
  {
    id: 2,
    name: "Mary",
    selected: false,
  },
];
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CUSTOMER:
      let newState = [...state];
      newState.forEach((customer) => {
        if (customer.id === action.payload) {
          customer.selected = true;
        } else {
          customer.selected = false;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default customerReducer;
