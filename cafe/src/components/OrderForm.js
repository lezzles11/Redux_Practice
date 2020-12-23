import React, { Component } from "react";

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
    console.log(this.state);
  };
  handleChange = (event) => {
    console.log(event.target.value);
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <div>
        <form
          className="text-center border border-light p-5"
          onSubmit={this.addOrder}
        >
          <input
            className="form-control"
            type="text"
            name="order"
            onChange={this.handleChange}
            value={this.state.order}
            placeholder="Order"
          />
          <input
            className="form-control"
            type="number"
            name="amount"
            onChange={this.handleChange}
            value={this.state.amount}
            placeholder="Amount"
          />

          <button
            type="submit"
            className="btn btn-outline-dark waves-effect"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
