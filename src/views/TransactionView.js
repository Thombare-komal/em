
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import TransactionEditForm from "../components/Transaction/TransactionEditForm";
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

let addButton = (
    <div className="create-transaction-add-button"><i className="fa fa-add"></i><span>Add</span> <br /></div>
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
        this.showGrid = this.showGrid.bind(this);
        this.getRow = this.getRow.bind(this);
        this.TransactionComponent = this.TransactionComponent.bind(this)
    }

    nextClick() {
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        });
    }
    backClick() {
        this.setState({
            count: this.state.count - 1
        });
    }
    showGrid(value) {
        if (value == true) {
            this.setState({
                count: 0
            });
        }
    }
    getRow(value) {
        console.log(value);
    }
    // setParent(val) {
    //     this.setState((prevState, props) => ({
    //         createTransactionData: { ...prevState.createTransactionData, ...val }
    //     }));
    // }

    TransactionComponent(count) {
        console.log(count)
        switch (count) {
            case 0:
                return <AllTransaction />

            case 1:
                return <TransactionForm switchTable={this.showGrid} />

            case 2:
                return <TransactionEditForm/>

            case 3:
                return <Transaction showRow={this.getRow} finalTransactionData={this.state} />
        }
    }


    render() {
        console.log("this.props**", this.props);
        
        return (
            <div className="content">
                <Row>
                    <Col md={{ offset: 1 }}>
                        {
                            this.state.count > 0 ?
                                < div onClick={this.backClick} title="Back" disabled>
                                    {backButton}
                                </div> : null
                        }
                    </Col>
                    <Col md={{ offset: 1 }}>
                        {
                            (this.state.count === 0) ?
                                < div onClick={this.nextClick} title="add" disabled>
                                    {addButton} {this.state.count }
                                </div> : null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 1 }}>
                        {
                            this.state.count > 0 ?
                                <div> <ComponentName {...this.props} /> </div> :
                                null
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
                                {
                                    (this.state.count < 3 && this.state.count > 0) ?
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
