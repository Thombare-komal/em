import React, {
    Component
} from 'react';
import {
    Row, Col, Button
} from 'react-bootstrap';
// import './Dashboard.css'
import banner from '../../assets/banner.jpg';
var FontAwesome = require('react-fontawesome');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const headerName = this.props.location.pathname.split("/");
        return (
            <div className="content justify-content-center">
                <Row>
                    <Col md={10}>
                        <Row>
                            <Col md={2} >
                                <p className="component-header"> {headerName[2]} </p>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <img className="col d-flex align-items-center justify-content-center" alt="banner" src={banner} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} >
                                <p> Business Overview </p>
                            </Col>
                        </Row>

                        <Row >
                            <Col md={3} ><h6> Revenue </h6> <h6> All Customers </h6> </Col>
                            <Col md={3} ><h6> Invoiced </h6> <h6> < FontAwesome name="inr" /> 42, 000.00 </h6> </Col>
                            <Col md={3} ><h6> Collection </h6> <h6> < FontAwesome name="inr" /> 36, 000.00 </h6> </Col>
                            <Col md={3} ><h6 > Pending </h6> <h6> < FontAwesome name="inr" /> 6, 000.00 </h6> </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={3}><h6> Costs </h6> <h6> All Suppliers </h6> </Col>
                            <Col md={3}><h6> Invoiced </h6> <h6> < FontAwesome name="inr" /> 15, 000.00 </h6> </Col>
                            <Col md={3} ><h6> Paid </h6> <h6> < FontAwesome name="inr" /> 10, 500.00 </h6> </Col>
                            <Col md={3} ><h6> Due </h6> <h6> < FontAwesome name="inr" /> 4, 500.00 </h6> </Col>
                        </Row>
                        <Row>
                            <Col md={12} ><p> My Actions </p> </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="create-invoice" variant="primary" >Create Invoice </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </div >
        )
    }
}
export default Dashboard;