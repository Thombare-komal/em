import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { add_invoice } from "../../redux/actions/Actions";

class CreateInovice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
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
    })
  }
  handleSubmit(){
    const value=this.state;
    this.props.addInvoice(value)

  }
  render() {
    {
      // this.props.sendData(this.state);
    }
    return (
      <div>
        {/* <Form onSubmit={()=>this.handleSubmit()}> */}
          <Col md={{ offset: 1 }}>
            <h5>Create Invoice</h5>
            <span className="sub-header">Capture Invoice Data</span>
          </Col>
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Id</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="id"
                placeholder="Enter Id"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
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
          <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Name</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Buyer Name"
                // value={this.state.buyerDetails.name}
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
                placeholder="Enter Buyer Mobile No"
                onChange={this.invoiceData}
              />
            </Col>
          </Row>
          <button onClick={()=>this.handleSubmit()}>submit</button>
          {/* <Row className="create-invoice-form-row">
            <Col md={{ offset: 1, span: 3 }}>
              <Form.Label>Payment Mode</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Card</option>
                  <option>Cash</option>
                  <option>Paytm/GPay</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row> */}
        {/* </Form> */}
        {/* <Form>
          <Col md={{ offset: 1 }}>
            <p className="sub-header">Add Attachments</p>
          </Col>
          <Row className="create-invoice-form-row">
            <Col md={7}>
              <input type="text" />
            </Col>
            <input id="myInput" type="file" name ="fileu" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
            <Col md={{offset: 1, span: 3}}>
             <Button variant="light" size="block lg" onClick={(e) => this.upload.click(console.log(e.target.files) )}>Upload</Button>
             </Col>
          </Row>
        </Form> */}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addInvoice: (data) => dispatch(add_invoice(data))
  }
}
export default connect(null, mapDispatchToProps)(CreateInovice);
