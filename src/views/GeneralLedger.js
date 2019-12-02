import React, { Component } from 'react';
import {
    Row, Col, Button
} from 'react-bootstrap';
import ComponentName from '../randomFunctions/CoponentName';
import CreateInvoice from '../components/GeneralLedger/CreateInovice';

class GeneralLedger extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="content">
                <Row>
                    <Col md={10}>
                        <ComponentName {...this.props} />
                        <CreateInvoice />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GeneralLedger;