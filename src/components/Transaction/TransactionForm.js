
import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from 'axios';
import { createTransactionSubmit } from "../../redux/actions/actions";

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            transactionAmount: "",
            transactionDate: "",
            name: "",
            email: "",
            phone: "",
            addSuccess : false
        };
        this.transactionData = this.transactionData.bind(this);
        this.addData = this.addData.bind(this)

    }
   async addData() {
        const response = axios.post('http://localhost:3001/transactions', this.state).then(await this.setState({
        ...this.state,
        addSuccess:true
        }))
        this.props.switchTable(this.state.addSuccess);
    }
    transactionData(event) {
        const name = event.target.name,
            value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <Col md={{ offset: 1 }}>
                    <span className="sub-header">Transaction Info</span>
                </Col>
                <Row className="create-transaction">
                    <Col md={{ offset: 1, span: 3 }}>
                        <Form.Label>id</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            name="id"
                            placeholder="Enter Temporary id"
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
                <Button variant="primary" onClick={this.addData}>Submit</Button>
            </div>
        );
    }
}
export default TransactionForm;
