import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  update_invoice,
  fetch_single_invoice
} from "../../redux/actions/Actions";

class UpdateInovice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleData: this.props.singleUserInvoice
    };
    this.invoiceData = this.invoiceData.bind(this);
  }
  invoiceData(e) {
    const name = e.target.name,
      value = e.target.value;
    let singleDataValue = Object.assign({}, this.state.singleData, {
      [name]: value
    });
    this.setState({
      singleData: singleDataValue
    });
  }
  handleSubmit() {
    this.props.updateInvoice(this.state.singleData);
  }
  render() {
    const id = this.state.id;
    const { singleData } = this.state;

    return (
      <div>
        <Col md={{ offset: 1 }}>
          <h5>Update Invoice</h5>
          <span className="sub-header">Capture Invoice Data</span>
        </Col>
        <div>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Invoice Number</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="invoiceNumber"
                defaultValue={singleData.invoiceNumber}
                placeholder="Enter Invoice Number"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Invoice Total</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="invoiceTotalAmount"
                defaultValue={singleData.invoiceTotalAmount}
                placeholder="Enter Invoice Total Amount"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Payment Due Date</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="date"
                name="invoiceDate"
                defaultValue={singleData.invoiceDate}
                placeholder="Select Date"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Name</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Buyer Name"
                defaultValue={singleData.name}
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Email</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="email"
                defaultValue={singleData.email}
                placeholder="Enter Buyer Email"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Phone Number</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="number"
                name="phone"
                defaultValue={singleData.phone}
                placeholder="Enter Buyer Mobile No"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
        </div>
        <button onClick={() => this.handleSubmit()}>Update</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    singleUserInvoice: ownProps.singleData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleInvoice: data => dispatch(fetch_single_invoice(data)),
    updateInvoice: data => dispatch(update_invoice(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateInovice);
