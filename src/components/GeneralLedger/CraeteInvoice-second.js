import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
class CreateInvoiceSecond extends Component {
    state = {}
    render() {
        console.log("this.props", this.props)
        return (
            <div>


                <Form>
                    <Col md={{ offset: 1, span: 3 }}>
                        <h5>Create Invoice</h5>
                        <p className="sub-header">Buyer Details</p>
                    </Col>
                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label >Name</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" name="name" placeholder="Enter Buyer Name" onChange={this.invoiceData} />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }} >
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" name="email" placeholder="Enter Buyer Email" onChange={this.invoiceData} />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Phone Number</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" name="phone" placeholder="Enter Buyer Mobile No" onChange={this.invoiceData} />
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default CreateInvoiceSecond;