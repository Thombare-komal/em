
import React, { Component } from 'react';
import AllInvoiceTable from "./AllInvoiceTable";
import { connect } from "react-redux";
import  fetch_invoice from "../../redux/actions/Actions";

class AllInvoice extends Component {
  constructor(props) {
    super(props);
    this.props.fetchInvoice();
  }
  render() {
    return <div>
      <AllInvoiceTable/>
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
      invoice: state.invoice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoice: () => dispatch(fetch_invoice)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(AllInvoice);
