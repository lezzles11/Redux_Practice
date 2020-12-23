# Redux Practice :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to have a series of redux examples to refer to later.

### Master Checklist

- [ ] Knowing what data structures you are using to store your data
- [ ] Create store with all your objects
- [ ] Declaring the types of actions that will be changing your data
- [ ] Writing the function that will manipulate your data
- [ ] Creating the action
- [ ] Dispatching the action accordingly
- [ ] Check that the state changes accordingly
- [ ] Create react components
- [ ] Make sure all components accept props
- [ ] Ensure by first giving it fake data
- [ ] For functions, create the appropriate method, then pass state of the array into the method accordingly
- [ ] 

### Where it fits :paperclip:

- [ ] Manipulating state within your application
- [ ] Understanding how your data changes as the user interacts with your application
- [ ] Listing out the different actions
- [ ] Listing out the event handlers that connect to those actions
- [ ] E.g.,

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

```
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

### Next, creating react components

- [ ] Create react components
- [ ] Make sure all components accept props
- [ ] If you are rendering a list, create a function in which you can pass it an array, and then make it list out all the different objects accordingly
- [ ] If you are creating a form, then ensure that you can pass in the
      E.g.,

class OrderForm extends Component {
constructor(props) {
super(props);
this.state = {
order: "",
amount: 1,
};
this.addOrder = this.addOrder.bind(this);
}
addOrder = (event) => {
console.log("clicked");
event.preventDefault();
// change this to this.props.addOrder(this.state), then pass in addOrder function
this.props.addOrder(this.state);
console.log(this.state);

} ...
}

```

to

```

```

- [ ] Ensure by first giving it fake data (e.g., )

```

class OrderList extends Component {
constructor(props) {
super(props);
this.state = {
orders: [
{ id: 1, order: "Coffee", amount: 1 },
{ id: 2, order: "Croissant", amount: 5 },
{ id: 3, order: "Sandwich", amount: 10 },
],
};
this.deleteOrder = this.deleteOrder.bind(this);
this.loadOrders = this.loadOrders.bind(this);
}
/\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

- DeleteOrder
- ==================================
- The purpose of this method is to delete the order - but first let's console.log the attribute \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***/
  deleteOrder = (event) => {
  console.log(
  parseInt(event.target.getAttribute("data-id"))
  );
  };
  /\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***
- LoadOrders
- ==================================
- The purpose of this method is to turn an array of orders into a list \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***/
  loadOrders = (orders) => {
  let list = [];
  for (let i = 0; i < orders.length; i++) {
  console.log(orders[i]);
  list.push(
  <div className="card">
  <div className="card-body" key={i.toString()}>
  <div>{orders[i].order}</div>
  <br />
  <div>{orders[i].amount}</div>
  <br />
  <button
                type="button"
                data-id={orders[i].id}
                onClick={this.deleteOrder}
                className="btn btn-outline-dark waves-effect"
              >
  Delete
  </button>
  </div>
  </div>
  );
  }
  return list;
  };
  render() {
  let orders = this.state.orders;
  return (
  <div>
  <h6>List of orders</h6>
  {this.loadOrders(orders)}
  </div>
  );
  }
  }

```

- [ ] Change it to accept props instead

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to test well.

## Sprint :athletic_shoe:

| Done? | Component                     | Priority | Estimated Time | Actual Time |
| ----- | ----------------------------- | :------: | :------------: | :---------: |
| x     | Adding basic example of redux |    H     |    30 mins     |             |
|       | Splicing redux                |    M     |    30 mins     |             |
|       | Writing react components      | 30 mins  |                |             |
|       | Connecting react to redux     |    M     |    30 mins     |             |
|       |                               |    M     |    30 mins     |             |

### Daily Stand Up :hourglass:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Redux](https://redux.js.org/)
[React-Redux](https://react-redux.js.org/introduction/quick-start#:~:text=React%20Redux%20is%20the%20official,the%20store%20to%20update%20data.)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
```
