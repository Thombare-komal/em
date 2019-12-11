
import React, { Component } from 'react';
import TransactionTable from './TransactionTable';
import axios from 'axios';
import TransactionEditForm from './TransactionEditForm';
class AllTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            edit: false,
            editId : ""
        };
        this.makeHttpRequestWithPage = this.makeHttpRequestWithPage.bind(this);
        this.getEditPage = this.getEditPage.bind(this);
    }

    makeHttpRequestWithPage = () => {
        var self = this;
        axios.get('http://localhost:3001/transactions')
            .then(function (response) {
                self.setState({
                    "transactions": response.data,
                })
            })
    }
    componentWillMount() {
        this.makeHttpRequestWithPage();
    }
    getEditPage(value,id) {
        this.editable = value;
        this.setState({
            ...this.state,
            edit: true,
            editId : id
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.edit == true ?
                        <TransactionEditForm transactionEdit={this.state} />
                        : <TransactionTable data={this.state.transactions} showEditPage={this.getEditPage} />
                }
            </div>
        );
    }
}
export default AllTransaction;