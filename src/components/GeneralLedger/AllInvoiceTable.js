import React, { Component } from "react";
import { connect } from "react-redux";
import { delete_invoice } from "../../redux/actions/Actions";
import UpdateInovice from "./UpdateInvoice";
import ShowInvoice from "./ShowInvoice";
class AllInvoiceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleData: "",
      updateTable: false,
      count: 0
    };
  }
  async updateRow(singleData) {
    var self = this;
    await self.setState({
      singleData: singleData,
      updateTable: true,
      count: 0
    });
  }
  deleteRow(id) {
    this.props.deleteInvoice(id);
  }
  // async rowClicked(row) {
  //   var self = this;
  //   await self.setState({
  //     singleData: row,
  //     updateTable: false,
  //     count: 1
  //   });
  //   console.log(this.state);
  // }
  render() {
    const { singleData } = this.state;
    return (
      <div>
        {this.state.updateTable === true ? (
          <UpdateInovice singleData={this.state.singleData} />
        ):(
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
                <tr key={row.id} 
                // onClick={() => this.rowClicked(row)}
                >
                  <td>{row.name}</td>
                  <td>{row.invoiceTotalAmount}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.invoiceDate}</td>
                  <td>
                    <i
                      className="fa fa-edit"
                      onClick={() => this.updateRow(row)}
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
        )
      }
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
