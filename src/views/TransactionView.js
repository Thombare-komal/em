import React, { Component } from 'react';
import Transaction from '../components/Transaction/Transaction';

class TransactionView extends Component {
    state = {}
    render() {
        return (
            <div className="content">
                <h5>Statement</h5>
                <span className="sub-header">All Transactions</span>
                <Transaction />
            </div>
        );
    }
}

export default TransactionView;