import React, { Component } from "react";

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
  /**********************************************
   * DeleteOrder
   * ==================================
   * The purpose of this method is to delete the order - but first let's console.log the attribute
   ***********************************************/
  deleteOrder = (event) => {
    console.log(
      parseInt(event.target.getAttribute("data-id"))
    );
  };
  /**********************************************
   * LoadOrders
   * ==================================
   * The purpose of this method is to turn an array of orders into a list
   ***********************************************/
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

export default OrderList;