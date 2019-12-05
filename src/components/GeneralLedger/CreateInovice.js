import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createInvoiceSubmit } from "../../redux/actions/actions";

function mapStateToProps(dispatch) {
  return {
    createInvoiceSubmit: value => dispatch(createInvoiceSubmit(value))
  };
}

class CreateInovice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceNumber: "",
      invoiceTotalAmount: "",
      invoiceDate: "",
      name: "",
      email: "",
      phone: ""
    };
    this.invoiceData = this.invoiceData.bind(this);
  }

  invoiceData(event) {
    const name = event.target.name,
      value = event.target.value;
    this.setState({
      [name]: value
    });
    this.props.createInvoiceSubmit(this.state);
  }

  render() {
    {
      this.props.sendData(this.state);
    }
    return (
      <div>
        <Form>
          <Col md={{ offset: 1 }}>
            <h5>Create Invoice</h5>
            <span className="sub-header">Capture Invoice Data</span>
          </Col>

          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Invoice Number</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="invoiceNumber"
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
                placeholder="Select Date"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
        </Form>
        <Form>
          <Col md={{ offset: 1 }}>
            <p className="sub-header">Add Attachments</p>
          </Col>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 7 }}>
              <Form.Control
                type="file"
                className="inputfile"
                placeholder="Select Invoice File to Upload"
              />
            </Col>
            <Col md={4}>
              <Button variant="light" size="block lg">
                Upload
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(null, mapStateToProps)(CreateInovice);
