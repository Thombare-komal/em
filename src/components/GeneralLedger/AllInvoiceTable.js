import React, { Component } from "react";
import { connect } from "react-redux";
import {delete_invoice } from "../../redux/actions/Actions";
import UpdateInovice from "./UpdateInvoice";
class AllInvoiceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateId : "",
      updateTable: false
    };
  }
  async updateRow(id) {
    var self = this;
    await self.setState({
      updateId : id,
      updateTable: true
    });
    
  }
  deleteRow(id) {
    this.props.deleteInvoice(id);
  }
  render() {
    const { invoice } = this.props;
    return (
      <div>
        {this.state.updateTable === true ? (
          <UpdateInovice id={this.state.updateId} />
        ) : (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th className="col  table-heder">Company Name</th>
                <th className="col  table-heder">Amount</th>
                <th className="col  table-heder">Email</th>
                <th className="col  table-heder">Phone</th>
                <th className="col  table-heder">Due Date</th>
                <th className="col  table-heder">Edit</th>
                <th className="col  table-heder">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.invoice.map((row, action) => (
                <tr key={row.id} onClick={this.rowClicked}>
                  <td>{row.name}</td>
                  <td>{row.invoiceTotalAmount}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.invoiceDate}</td>
                  <td>
                    <i
                      className="fa fa-edit"
                      onClick={() => this.updateRow(row.id)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => this.deleteRow(row.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    invoice: state.invoice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteInvoice: data => dispatch(delete_invoice(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllInvoiceTable);
