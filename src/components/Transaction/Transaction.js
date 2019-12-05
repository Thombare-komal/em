import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Transaction extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="sub-section-invoice" >
                    <Row>
                        <Col> <p>Invoice</p> </Col>
                        <Col> <p className="invoice-details">kqdfhfdwehgfh</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Customer</p> </Col>
                        <Col> <p className="invoice-details">whgfwhgf</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Invoice Total</p> </Col>
                        <Col> <p className="invoice-details">wjkfhwkjf</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Payment Due Date</p> </Col>
                        <Col> <p className="invoice-details">wejhfwefg</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Invoice URI</p> </Col>
                        <Col> <p className="invoice-details">jewhfegwfr</p></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Transaction;