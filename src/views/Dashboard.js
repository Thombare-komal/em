import React, {
    Component
} from 'react';
import {
    Row, Col, Button
} from 'react-bootstrap';
import banner from '../assets/banner.jpg';
import ComponentName from '../randomFunctions/CoponentName';
var FontAwesome = require('react-fontawesome');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log("this.state", this.state);
        return (
            <div className="content">
                <Row>
                    <Col md={10}>
                        <ComponentName {...this.props} />
                        <Row >
                            <Col>
                                <img className="col d-flex align-items-center justify-content-center" alt="banner" src={banner} />
                            </Col>
                        </Row>
                        <div className="main-sub-content">
                            <Row>
                                <Col md={4} >
                                    <p className="sub-header"> Business Overview </p>
                                </Col>
                            </Row>

                            <Row >
                                <Col md={3} ><p> Revenue </p> <p> All Customers </p> </Col>
                                <Col md={3} ><p> Invoiced </p> <p> < FontAwesome name="inr" /> 42, 000.00 </p> </Col>
                                <Col md={3} ><p> Collection </p> <p> < FontAwesome name="inr" /> 36, 000.00 </p> </Col>
                                <Col md={3} ><p > Pending </p> <p> < FontAwesome name="inr" /> 6, 000.00 </p> </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={3}><p> Costs </p> <p> All Suppliers </p> </Col>
                                <Col md={3}><p> Invoiced </p> <p> < FontAwesome name="inr" /> 15, 000.00 </p> </Col>
                                <Col md={3} ><p> Paid </p> <p> < FontAwesome name="inr" /> 10, 500.00 </p> </Col>
                                <Col md={3} ><p> Due </p> <p> < FontAwesome name="inr" /> 4, 500.00 </p> </Col>
                            </Row>
                            <Row>
                                <Col md={12} >
                                    <p className="sub-header"> My Actions </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button className="create-invoice" variant="primary" >Create Invoice </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}
export default Dashboard;