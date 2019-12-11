
import React, { Component } from 'react';
import axios from 'axios';
class TransactionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editClick:""
        };
        this.rowClicked = this.rowClicked.bind(this)
    }
    async updateRow(id){
        
        await this.setState({ editClick: "clicked"});
        const editclicked = this.state.editClick;
        this.props.showEditPage(editclicked,id);
    }
    deleteRow(id){
        axios.delete('http://localhost:3001/transactions/' + id)
        .then(res => {
            alert("data deleted successfully")
        })
    }
    rowClicked(e){
    }
    render() {
        return (
            <div>
                 < table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col  table-heder">Company Name</th>
                            <th className="col  table-heder">Amount</th>
                            <th className="col  table-heder">Email</th>
                            <th className="col  table-heder">Phone</th>
                            <th className="col  table-heder">Due Date</th>
                            <th className="col  table-heder">Edit</th>
                            <th className="col  table-heder">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((row, action) =>
                            <tr key={row.id} onClick={this.rowClicked}>
                                <td>{row.name}</td>
                                <td>{row.transactionAmount}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>{row.transactionDate}</td>
                                <td><i className="fa fa-edit" onClick={() => this.updateRow(row.id)}></i></td>
                                <td><i className="fa fa-trash" onClick={()=> this.deleteRow(row.id)}></i></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TransactionTable;