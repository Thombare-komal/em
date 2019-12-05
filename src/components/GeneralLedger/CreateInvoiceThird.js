import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import banner from "../../assets/banner.jpg";
class CreateInvoiceThird extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { createInvoiceData } = this.props.finalInvoiceData;
        console.log("/*/*/*", this.props)
        return (
            < div className="content" >
                <Row>
                    <Col md={4}>
                        <p className="component-header">Create Invoice</p>
                    </Col>
                </Row>
                <p className="sub-header">Your Invoice has been sent</p>
                <img className=" d-flex align-items-center justify-content-center" alt="banner" src={banner} />


                <div className="sub-section-invoice" >
                    <Row>
                        <Col> <p>Invoice</p> </Col>
                        <Col> <p className="invoice-details">{createInvoiceData.invoiceNumber}</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Customer</p> </Col>
                        <Col> <p className="invoice-details">{createInvoiceData.name}</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Invoice Total</p> </Col>
                        <Col> <p className="invoice-details">{createInvoiceData.invoiceTotalAmount}</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Payment Due Date</p> </Col>
                        <Col> <p className="invoice-details">{createInvoiceData.invoiceDate}</p></Col>
                    </Row>

                    <Row>
                        <Col> <p>Invoice URI</p> </Col>
                        <Col> <p className="invoice-details">{createInvoiceData.email}</p></Col>
                    </Row>
                    <Row>
                        <Col className="text-center"><Button variant="light">Show</Button></Col>
                    </Row>
                </div>
            </div >
        );
    }
}

export default CreateInvoiceThird;