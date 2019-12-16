import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { update_invoice,fetch_single_invoice} from "../../redux/actions/Actions";

class UpdateInovice extends Component {
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
  UNSAFE_componentWillMount() {
    this.props.fetchSingleInvoice(this.props.id);
  }

  invoiceData(event) {
    const name = event.target.name,
      value = event.target.value;
    this.setState({
      [name]: value
    });
    

  }
  handleSubmit() {
    const value = this.state;
    this.props.updateInvoice(value);
  }
  render() {
    this.props.invoice.id = this.state.id;
    this.props.invoice.invoiceNumber = this.state.invoiceNumber;
    this.props.invoice.invoiceDate = this.state.invoiceDate;
    this.props.invoice.invoiceTotalAmount = this.state.invoiceTotalAmount;
    this.props.invoice.name = this.state.name;
    this.props.invoice.email = this.state.email;
    this.props.invoice.phone = this.state.phone;
    return (
      <div>
        {/* <Form onSubmit={()=>this.handleSubmit()}> */}
        <Col md={{ offset: 1 }}>
          <h5>Update Invoice</h5>
          <span className="sub-header">Capture Invoice Data</span>
        </Col>
          <div>
          <Row className="create-invoice-form-row">
              <Col md={{ offset: 1, span: 3 }}>
                <Form.Label>Id</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="text"
                  name="id"
                  value={this.state.id}
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
                  value={this.state.invoiceNumber}
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
                  value={this.state.invoiceTotalAmount}
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
                  value={this.state.invoiceDate}
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
                  value={this.state.name}
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
                  value={this.state.email}
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
                  value={this.state.phone}
                  placeholder="Enter Buyer Mobile No"
                  onChange={this.invoiceData}
                />
              </Col>
            </Row>
          </div>
        <button onClick={() => this.handleSubmit()}>Update</button>
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
const mapStateToProps = state => {
  return {
    invoice: state.invoice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleInvoice: (data) => dispatch(fetch_single_invoice(data)),
    updateInvoice: (data) => dispatch(update_invoice(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateInovice);
