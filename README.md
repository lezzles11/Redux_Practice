# Redux Practice :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to have a series of redux examples to refer to later.

### Where it fits :paperclip:

- [ ] Manipulating state within your application
- [ ] Understanding how your data changes as the user interacts with your application
- [ ] Listing out the different actions
- [ ] Listing out the event handlers that connect to those actions
- [ ] E>g.,

## Planning Redux

- [ ] Knowing what data structures you are using to store your data
- [ ] Creating a sample outline of your data
      Let's say that your initial data structures look like this:

```
let initialState = {
  orders: [
    { id: 1, order: "Coffee", amount: 1 },
    { id: 2, order: "Croissant", amount: 5 },
    { id: 3, order: "Sandwich", amount: 10 },
  ],
};

```

- [ ] Declaring the types of actions that will be changing your data

```
const NEW_ORDER = "NEW_ORDER";
const EDIT_ORDER = "EDIT_ORDER";
const DELETE_ORDER = "DELETE_ORDER";

```

- [ ] Writing the function that will manipulate your data

```let reducer = (state = initialState, action) => {
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
```

- [ ] Creating the action

```
let edit_croissant_order = {
  type: EDIT_ORDER,
  payload: { id: 2, amount: 6 },
};
let delete_order = {
  type: DELETE_ORDER,
  payload: { id: 3 },
};
```

- [ ] Dispatching the action accordingly

```
store.dispatch(edit_croissant_order);
store.dispatch(delete_order);
```

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to test well.

## Sprint :athletic_shoe:

| Done? | Component              | Priority | Estimated Time | Actual Time |
| ----- | ---------------------- | :------: | :------------: | :---------: |
| x     | This checklist         |    H     |    30 mins     |             |
|       | Read Documentation     |    M     |    30 mins     |             |
|       | Look at three examples | 30 mins  |                |
|       | Complete basic example |    M     |    30 mins     |     15      |

### Daily Stand Up :hourglass:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
