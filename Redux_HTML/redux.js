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
    {
      id: 1,
      email: "lesleyc@bu.edu",
      password: "password",
      spotify_id: "spotify_id",
      spotify_access_token: "spotify_access_token",
      timestamp: "",
    },
    {
      id: 2,
      email: "ryan@bu.edu",
      password: "password",
      spotify_id: "spotify_id",
      spotify_access_token: "spotify_access_token",
      timestamp: "",
    },
    {
      id: 3,
      email: "robert@bu.edu",
      password: "password",
      spotify_id: "spotify_id",
      spotify_access_token: "spotify_access_token",
      timestamp: "",
    },
  ],
};

const NEW_ORDER = "NEW_ORDER";
const EDIT_ORDER = "EDIT_ORDER";
const DELETE_ORDER = "DELETE_ORDER";
const CHANGE_AGE = "CHANGE_AGE";
const ADD_USER = "ADD_USER";
const EDIT_USER_PASSWORD = "EDIT_USER_PASSWORD";
const GET_USER = "GET_USER";
const DELETE_USER = "DELETE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";

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
  console.log("User reducer: ", state.users);
  switch (action.type) {
    case ADD_USER: {
      let newState = {
        ...state,
        users: [...state.users, action.payload],
      };
      return newState;
    }
    case EDIT_USER_PASSWORD: {
      let { id, password } = action.payload;
      let newState = { ...state };
      newState.users.map((item) => {
        if (item.id === id) {
          item.password = password;
        }
      });
      return newState;
    }
    case DELETE_USER: {
      let { id } = action.payload;
      let newState = { ...state };
      newState.users = newState.users.filter(
        (user) => user.id !== id
      );
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

/**********************************************
 * Actions to test
 * ==================================
 ***********************************************/
let edit_croissant_order = {
  type: EDIT_ORDER,
  payload: { id: 2, amount: 6 },
};
let delete_order = {
  type: DELETE_ORDER,
  payload: { id: 3 },
};
let edit_user = {
  type: EDIT_USER_PASSWORD,
  payload: { id: 1, password: "newPassword" },
};
let delete_user = {
  type: DELETE_USER,
  payload: { id: 2 },
};
let add_user = {
  type: ADD_USER,
  payload: {
    id: 4,
    payload: {
      id: 4,
      email: "dad@bu.edu",
      password: "password",
      spotify_id: "spotify_id",
      spotify_access_token: "spotify_access_token",
      timestamp: "",
    },
  },
};

// call the action
store.dispatch(edit_croissant_order);
store.dispatch(delete_order);
store.dispatch(edit_user);
store.dispatch(delete_user);
store.dispatch(add_user);
