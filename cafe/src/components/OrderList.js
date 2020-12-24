import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteOrder } from "../redux/actions/orderActions";

class OrderList extends Component {
  /**********************************************
   * DeleteOrder
   * ==================================
   * The purpose of this method is to delete the order - but first let's console.log the attribute
   ***********************************************/
  deleteOrder = (event) => {
    console.log(
      parseInt(event.target.getAttribute("data-id"))
    );
    this.props.deleteOrder(
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
    let orders = this.props.orders;
    return (
      <div>
        <h6>List of orders</h6>
        {this.loadOrders(orders)}
      </div>
    );
  }
}
// This is taken from the reducers
const mapStateToProps = (state) => ({
  orders: state.orders,
});
export default connect(mapStateToProps, { deleteOrder })(
  OrderList
);
