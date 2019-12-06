import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ComponentName from "../../randomFunctions/CoponentName";
import banner from "../../assets/banner.jpg";

class AllTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //const { createTransactionData } = this.props.finalTransactionData;
        console.log("/*/*/*", this.props)
        return (
            < div>
                <Row>
                    <Col md={4}>
                    <ComponentName componentName="statement" />
                    </Col>
                </Row>
                
                <p className="sub-header">All Transactions</p>


                <div className="sub-section-transaction" >
                    <Row>
                        <Col> <p>Transaction Number</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.transactionNumber}</p></Col> */}
                    </Row>

                    <Row>
                        <Col> <p>Amount</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.transactionAmount}</p></Col> */}
                    </Row>

                    <Row>
                        <Col> <p>Due Date</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.transactionDate}</p></Col> */}
                    </Row>

                    <Row>
                        <Col> <p>Name</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.name}</p></Col> */}
                    </Row>

                    <Row>
                        <Col> <p>Email</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.email}</p></Col> */}
                    </Row>
                    <Row>
                        <Col> <p>Phone</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.phone}</p></Col> */}
                    </Row>
                    <Row>
                        <Col> <p>Mode Of Payment</p> </Col>
                        {/* <Col> <p className="transaction-details">{createTransactionData.modeOfPayment}</p></Col> */}
                    </Row>
                    <Row>
                        <Col className="text-center"><Button variant="light">Show</Button></Col>
                    </Row>
                </div>
            </div >
        );
    }
}
export default AllTransaction;