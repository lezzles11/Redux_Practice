console.log("Hello redux");
// Initial State
// #TODO: Create user reducer
// #TODO: Create question reducer
let initialState = {
  orders: [
    { id: 1, order: "Coffee", amount: 1 },
    { id: 2, order: "Croissant", amount: 5 },
    { id: 3, order: "Sandwich", amount: 10 },
  ],
  users: [
    { id: 1, name: "Lesley", age: 36 },
    { id: 2, name: "Ryan", age: 39 },
    { id: 3, name: "Robert", age: 33 },
  ],
};

const NEW_ORDER = "NEW_ORDER";
const EDIT_ORDER = "EDIT_ORDER";
const DELETE_ORDER = "DELETE_ORDER";
const CHANGE_AGE = "CHANGE_AGE";

// reducer - thing that changes the state
let orderReducer = (state = initialState, action) => {
  console.log("Order reducer, state: ", state.orders);
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
      let newState = {
        ...state,
      };
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

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AGE: {
      let { id, age } = action.payload;
      let newState = { ...state };
      newState.users.map((item) => {
        if (item.id === id) {
          item.age = age;
        }
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

let rootReducer = Redux.combineReducers({
  orderReducer,
  userReducer,
});
//   let resultState = reducer(state, action);
//   console.log(resultState);
//   console.log(reducer(resultState, action));
let store = Redux.createStore(rootReducer, initialState);
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
let change_age = {
  type: CHANGE_AGE,
  payload: { id: 1, age: 37 },
};
// call the action
store.dispatch(edit_croissant_order);
store.dispatch(delete_order);
store.dispatch(change_age);
