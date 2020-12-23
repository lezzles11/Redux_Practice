console.log("Hello redux");
// action
let action = { type: "NEW_ORDER", payload: "Coffee" };
let initialState = {
  orders: [
    { id: 1, order: "Coffee", amount: 1 },
    { id: 2, order: "Croissant", amount: 5 },
    { id: 3, order: "Sandwich", amount: 10 },
  ],
};

const NEW_ORDER = "NEW_ORDER";
const EDIT_ORDER = "EDIT_ORDER";
const DELETE_ORDER = "DELETE_ORDER";

// reducer - thing that changes the state
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ORDER: {
      let newState = {
        ...state,
        orders: [...state.orders, action.payload],
      };
      return newState;
    }
    case EDIT_ORDER: {
      // expecting two things from payload: id and amount
      let { id, amount } = action.payload;
      let newState = { ...state };
      newState.orders.map((item) => {
        if (item.id === id) {
          item.amount = amount;
        }
      });
      return newState;
    }
    case DELETE_ORDER: {
      let { id } = action.payload;
      let newState = { ...state };
      newState.orders = newState.orders.filter(
        (item) => item.id !== id
      );
      return newState;
    }
    default: {
      return state;
    }
  }
};
//   let resultState = reducer(state, action);
//   console.log(resultState);
//   console.log(reducer(resultState, action));
let store = Redux.createStore(reducer, initialState);
// When it subscribes, this will occur all the time
store.subscribe(() => {
  console.log("State has been changed");
  console.log(store.getState());
});

let edit_croissant_order = {
  type: EDIT_ORDER,
  payload: { id: 2, amount: 6 },
};
let delete_order = {
  type: DELETE_ORDER,
  payload: { id: 3 },
};
// call the action
store.dispatch(edit_croissant_order);
store.dispatch(delete_order);
