import { SUBMIT_ORDER } from "../actions/types";

/**********************************************
 * Working with deeply nested data
 * ==================================
 ***********************************************/
const initialState = [];

/**********************************************
 * Backlog Reducer
 * ==================================
 ***********************************************/
const backlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ORDER:
      return [
        ...state,
        { ...action.payload, id: generateID(state) },
      ];
    default:
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

export default backlogReducer;
