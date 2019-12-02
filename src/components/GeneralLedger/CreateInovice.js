import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

let style = `md={{ offset: 1, span: 3 }}`;

class CreateInovice extends Component {
    state = {}

    render() {
        return (
            <div>
                <h3>Create Invoice</h3>
                <p className="">Capture Invoice Data</p>
                <Form>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Invoice Number</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" placeholder="Enter Invoice Number" />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }} >
                            <Form.Label>Invoice Total</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" placeholder="Enter Invoice Total Amount" />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Payment Due Date</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" placeholder="Select Date" />
                        </Col>
                    </Row>

                </Form>
            </div>
        );
    }
}

export default CreateInovice;