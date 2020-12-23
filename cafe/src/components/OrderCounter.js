import React, { Component } from "react";

class OrderCounter extends Component {
  render() {
    return (
      <div>
        Order Counter
        <strong>
          Number of current orders: ({this.props.count})
        </strong>
      </div>
    );
  }
}

export default OrderCounter;
