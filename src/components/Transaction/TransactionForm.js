
import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createTransactionSubmit } from "../../redux/actions/actions";

function mapStateToProps(dispatch) {
    return {
        createTransactionSubmit: value => dispatch(createTransactionSubmit(value))
    };
}

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionNumber: "",
            transactionAmount: "",
            transactionDate: "",
            name: "",
            email: "",
            phone: "",
            modeOfPayment: ""
        };
        this.transactionData = this.transactionData.bind(this);
    }

    transactionData(event) {
        console.log(event);
        const name = event.target.name,
            value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state)
        this.props.createTransactionSubmit(this.state);
    }

    render() {
        {
            this.props.sendData(this.state);
        }
        return (
            <div>
                <Form>
                    <Col md={{ offset: 1 }}>
                        <span className="sub-header">Transaction Info</span>
                    </Col>

                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Transaction Number</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="text"
                                name="transactionNumber"
                                placeholder="Enter Transaction Number"
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>

                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Transaction Total</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="text"
                                name="transactionAmount"
                                placeholder="Enter Transaction Total Amount"
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>

                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Payment Due Date</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="date"
                                name="transactionDate"
                                placeholder="Select Date"
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>
                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter Buyer Name"
                                // value={this.state.buyerDetails.name}
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>
                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Enter Buyer Email"
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>
                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Phone Number</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control
                                type="number"
                                name="phone"
                                placeholder="Enter Buyer Mobile No"
                                onChange={this.transactionData}
                            />
                        </Col>
                    </Row>
                    <Col md={{ offset: 1 }}>
                        <span className="sub-header">Payment Info</span>
                    </Col>
                    <Row className="create-transaction-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Mode Of Payment</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control as="select" name="modeOfPayment"
                                placeholder="Enter Mode Of Payment"
                                onChange={this.transactionData}>
                                <option value="select" selected>Please Select</option>
                                <option value="cash">Cash</option>
                                <option value="card">Credit/Debit Card</option>
                                <option value="netbanking">Netbanking</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    {/* <Button variant="success" size="lg" block value="Submit" type="submit">Make Payment</Button> */}
                </Form>
                
            </div>
        );
    }
}

export default connect(null, mapStateToProps)(TransactionForm);
