import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createInvoiceSubmit } from '../../redux/actions/actions';


function mapStateToProps(dispatch) {
    return {
        createInvoiceSubmit: value => dispatch(createInvoiceSubmit(value))
    }
}


let arrowRight = <div className="arrowRight arrow">
    <i className="glyphicon glyphicon-arrow-right glyphicon-center"></i>
</div>

let arrowLeft = <div className="arrowLeft arrow">
    <i className="glyphicon glyphicon-arrow-left glyphicon-center"></i>
</div>

class CreateInovice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceNumber: "",
            invoiceTotalAmount: "",
            invoiceDate: ""
        }

        this.invoiceData = this.invoiceData.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.backClick = this.backClick.bind(this);
    }

    invoiceData(event) {
        const name = event.target.name,
            value = event.target.value;
        this.setState({
            [name]: value
        })
        this.props.createInvoiceSubmit(this.state);
    }



    nextClick() {
        console.log("next click", this.state, this.props);
    }

    backClick() {
        console.log("back click");

    }


    render() {
        return (
            <div>
                <h3>Create Invoice</h3>
                <p className="sub-header">Capture Invoice Data</p>
                <Form>
                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label >Invoice Number</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" name="invoiceNumber" placeholder="Enter Invoice Number" onChange={this.invoiceData} />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }} >
                            <Form.Label>Invoice Total</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" name="invoiceTotalAmount" placeholder="Enter Invoice Total Amount" onChange={this.invoiceData} />
                        </Col>
                    </Row>

                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 3 }}>
                            <Form.Label>Payment Due Date</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="date" name="invoiceDate" placeholder="Select Date" onChange={this.invoiceData} />
                        </Col>
                    </Row>

                </Form>
                <Form>
                    <p className="sub-header">Add Attachments</p>
                    <Row className="create-invoice-form-row">
                        <Col md={{ offset: 1, span: 7 }}>
                            <Form.Control type="file" placeholder="Select Invoice File to Upload" />
                        </Col>
                        <Col md={4} >
                            <Button variant="success" size="block lg">
                                Upload
                            </Button>
                        </Col>

                    </Row>
                </Form>

                <div className="create-invoice-div">
                    <div onClick={this.backClick}>
                        {arrowLeft}
                    </div>
                    <div onClick={this.nextClick}>
                        {arrowRight}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, mapStateToProps)(CreateInovice);

