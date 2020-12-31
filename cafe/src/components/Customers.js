import React, { Component } from "react";
import { connect } from "react-redux";
import { markCustomerAsSelected } from "../redux/actions/customerActions";

/**********************************************
 * Purpose
 * ==================================
 * Changing key and value of a data type
 * E.g.,
 * - Marking something as done
 * - 
 ***********************************************/

class Customers extends Component {
  // change one of the properties
  markAsSelected = (event) => {
    this.props.markCustomerAsSelected(
      parseInt(event.target.getAttribute("data-id"))
    );
  };
  render() {
    return (
      <div>
        Customers
        <br />
        Length: {this.props.customers.length}
        {/* Can add class name based on property  */}
        {this.props.customers.map((customer) => (
          <div
            key={customer.id}
            data-id={customer.id}
            className={customer.selected ? `red` : ``}
            onClick={this.markAsSelected}
          >
            {customer.name}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  customers: state.customers,
});
const mapDispatchToProps = {
  markCustomerAsSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
