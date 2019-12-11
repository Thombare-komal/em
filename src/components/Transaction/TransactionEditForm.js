
import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from 'axios';
import { createTransactionSubmit } from "../../redux/actions/actions";

class TransactionEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            transactionAmount: "",
            transactionDate: "",
            name: "",
            email: "",
            phone: "",
            editSuccess: false
        };
        this.transactionData = this.transactionData.bind(this);
        this.updateData = this.updateData.bind(this)
    }
    async updateData() {
        axios.put('http://localhost:3001/transactions/' + this.props.transactionEdit.editId, this.state)
            .then(await this.setState({
                ...this.state,
                editSuccess: true
            }))
        // this.props.switchTable(this.state.editSuccess);
    }
    componentWillMount() {
        var self = this;
        axios.get('http://localhost:3001/transactions/' + this.props.transactionEdit.editId)
            .then(function (response) {
               self.setState({
                    id: response.data.id,
                    transactionAmount: response.data.transactionAmount,
                    transactionDate: response.data.transactionDate,
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                })
            })

            this.setState({
                editForm:this.props
            })

    }
  
    transactionData(event) {
        const name = event.target.name,
            value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        console.log("transaction edit Form", this.props);
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
                            value={this.state.id}
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
                            value={this.state.transactionAmount}
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
                            type="text"
                            value={this.state.transactionDate}
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
                            value={this.state.name}
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
                            value={this.state.email}
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
                            value={this.state.phone}
                            placeholder="Enter Buyer Mobile No"
                            onChange={this.transactionData}
                        />
                    </Col>
                </Row>
                <Button variant="primary" onClick={this.updateData}>Update</Button>
            </div>
        );
    }
}
export default TransactionEditForm;