import React from "react";
import "./App.css";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import OrderCounter from "./components/OrderCounter";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h5>My New Cafe</h5>
        <OrderForm />
        <OrderCounter />
        <OrderList />
      </div>
    );
  }
}

export default App;
