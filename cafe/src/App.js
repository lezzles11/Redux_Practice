import React from "react";
import "./App.css";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import OrderCounter from "./components/OrderCounter";
import OrderBacklog from "./components/OrderBacklog";
import Customers from "./components/Customers";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h5>My New Cafe</h5>
        <div className="row">
          <div className="col-sm-6">
            <OrderForm />
            <hr />
            <Customers />
            <OrderList />
          </div>
          <div className="col-sm-6">
            Backlog of Orders
            <OrderCounter />
            <OrderBacklog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
