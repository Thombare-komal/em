import React, { Component } from 'react';
import {
    Row, Col, Button
} from 'react-bootstrap';
import ComponentName from '../randomFunctions/CoponentName';
import CreateInvoice from '../components/GeneralLedger/CreateInovice';
import CreateInvoiceSecond from '../components/GeneralLedger/CraeteInvoice-second';


let arrowRight = (
    <div className="arrowRight arrow">
        <i className="glyphicon glyphicon-arrow-right"></i>
    </div>
);

let arrowLeft = (
    <div className="arrowLeft arrow">
        <i className="glyphicon glyphicon-arrow-left"></i>
    </div>
);
class GeneralLedger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextFormClicked: false,
            backFormClicked: true,
            createInvoiceData: ""
        }
        this.nextClick = this.nextClick.bind(this);
        this.backClick = this.backClick.bind(this);
        this.getData = this.getData.bind(this);
    }


    nextClick() {
        this.setState({
            nextFormClicked: true,
            backFormClicked: false
        })
        console.log("data", this.state)
    }

    backClick() {
        this.setState({
            nextFormClicked: false,
            backFormClicked: true
        })

    }

    getData(val) {
        this.setState({
            createInvoiceData: val
        })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col md={8}>
                        {/* <ComponentName {...this.props} /> */}
                        {this.state.nextFormClicked ? <CreateInvoiceSecond /> : <CreateInvoice sendData={this.getData} />}
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className="create-invoice-div">
                            <Col md={{ offset: 1 }}>
                                <div onClick={this.backClick} title="Back" disabled>
                                    {arrowLeft}
                                </div>
                                <div onClick={this.nextClick} title="Next" disabled>
                                    {arrowRight}
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>

            </div >
        );
    }
}

export default GeneralLedger;