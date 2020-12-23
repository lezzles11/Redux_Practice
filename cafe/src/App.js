import React from "react";
import "./App.css";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import OrderCounter from "./components/OrderCounter";
class App extends React.Component {
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
  addOrder = (order) => {
    let { orders } = this.state;
    orders.push(order);
    this.setState({ orders });
  };
  render() {
    return (
      <div className="container">
        <h5>My New Cafe</h5>
        <OrderForm addOrder={this.addOrder} />
        <OrderCounter />
        <OrderList />
      </div>
    );
  }
}

export default App;
