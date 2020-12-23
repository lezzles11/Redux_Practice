console.log("Let's go, work husband");

const ADD_USER = "ADD_USER";
const EDIT_USER_PASSWORD = "EDIT_USER_PASSWORD";
const GET_USER = "GET_USER";
const DELETE_USER = "DELETE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";

let initalState = {
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
