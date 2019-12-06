
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import TransactionForm from "../components/Transaction/TransactionForm";
import ComponentName from "../randomFunctions/CoponentName";
import Transaction from "../components/Transaction/Transaction";
import AllTransaction from "../components/Transaction/AllTransaction"

let paymentButton = (
  <Button variant="success" size="lg" block value="Submit" type="submit">Make Payment</Button>
);

let backButton = (
  <div className="create-transaction-back-button"> <span>&#8592;</span><span>Back</span> <br /></div>
);
class TransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createTransactionData: "",
      count: 0
    };
    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.getData = this.getData.bind(this);
    this.TransactionComponent = this.TransactionComponent.bind(this)
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
      createTransactionData: { ...prevState.createTransactionData, ...val }
    }));
    console.log(this.state)
  }

  TransactionComponent(count) {
    switch (count) {
      case 0:
        return <AllTransaction />

      case 1:
        return <TransactionForm backButton={backButton} sendData={this.getData} />


      case 2:
        return <Transaction backButton={backButton} finalTransactionData={this.state} />
    }
  }



  render() {
    console.log("***", this.state);
    return (
     <div className="content">
        <Row>
          <Col md={{ offset: 1 }}>
          {
              this.state.count > 0 ?
         <div> <ComponentName {...this.props} /> </div>:
          null
          }
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1 }}>
            {
              this.state.count > 0 ?
                < div onClick={this.backClick} title="Back" disabled>
                  {backButton}
                </div> : null
            }
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            {this.TransactionComponent(this.state.count)}
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <div className="create-transaction-div">
              <Col md={{ offset: 1 }}>
                {/* {
                  this.state.count > 0 ?
                    < div onClick={this.backClick} title="Back" disabled>
                      {backButton}
                    </div> : null
                } */}
                {
                  this.state.count < 2?
                    < div onClick={this.nextClick} title="Next" disabled>
                      {paymentButton}
                    </div> : null
                }
              </Col>
            </div>
          </Col>
        </Row>
        </div>
    );
  }
}

export default TransactionView;
