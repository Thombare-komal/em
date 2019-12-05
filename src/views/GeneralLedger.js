import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ComponentName from "../randomFunctions/CoponentName";
import CreateInvoice from "../components/GeneralLedger/CreateInovice";
import CreateInvoiceSecond from "../components/GeneralLedger/CraeteInvoice-second";
import InvoiceDetail from "../views/InvoiceDetail";
import CreateInvoiceThird from '../components/GeneralLedger/CreateInvoiceThird';

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
    super(props);
    this.state = {
      createInvoiceData: "",
      count: 0
    };
    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.getData = this.getData.bind(this);
    this.GeneralLedgerComponent = this.GeneralLedgerComponent.bind(this)
  }

  nextClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  backClick() {
    this.setState({
      count: this.state.count - 1
    });
  }

  getData(val) {
    this.setState((prevState, props) => ({
      createInvoiceData: { ...prevState.createInvoiceData, ...val }
    }));
  }

  GeneralLedgerComponent(count) {
    switch (count) {
      case 0:
        return <CreateInvoice sendData={this.getData} />

      case 1:
        return <CreateInvoiceSecond sendData={this.getData} />

      case 2:
        return <CreateInvoiceThird finalInvoiceData={this.state} />
    }
  }



  render() {
    console.log("***", this.state);

    return (
      <div className="content">
        <Row>
          <Col md={8}>
            {this.GeneralLedgerComponent(this.state.count)}
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <div className="create-invoice-div">
              <Col md={{ offset: 1 }}>

                {
                  this.state.count > 0 ?
                    <div onClick={this.backClick} title="Back" disabled>
                      {arrowLeft}
                    </div> : null
                }

                {
                  this.state.count < 2 ?
                    < div onClick={this.nextClick} title="Next" disabled>
                      {arrowRight}
                    </div> : null
                }
              </Col>
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}

export default GeneralLedger;
