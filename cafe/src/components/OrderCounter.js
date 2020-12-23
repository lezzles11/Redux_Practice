import React, { Component } from "react";

class OrderCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { id: 1, order: "Coffee", amount: 1 },
        { id: 2, order: "Croissant", amount: 5 },
        { id: 3, order: "Sandwich", amount: 10 },
      ],
    };
  }
  render() {
    return (
      <div>
        Order Counter
        <strong>
          Number of current orders: (
          {this.state.orders.length})
        </strong>
      </div>
    );
  }
}

export default OrderCounter;
