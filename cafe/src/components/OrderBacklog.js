import React, { Component } from "react";
import { connect } from "react-redux";

export class OrderBacklog extends Component {
  render() {
    return (
      <div>
        Order Backlog
        <br />
        {this.props.backlogs.map((order) => (
          <div>
            <div className="card">
              <div className="card-body">
                <div key={order.time}>
                  <table>
                    <tbody>
                      {order.list.map((item) => (
                        <tr key={item.id}>
                          <td>{item.order}</td>
                          <td>{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />
                  <div>customer: {order.customer}</div>
                  <div>time: {order.time}</div>
                </div>
              </div>
            </div>
            <br />
          </div>
        ))}
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  backlogs: state.backlogs,
  customers: state.customers,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBacklog);
