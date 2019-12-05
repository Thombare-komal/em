import React, { Component } from 'react';
class CreateInvoiceThird extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        {
            this.props.sendData(this.state);
        }
        console.log("CreateInvoiceThird", this.props)
        return (<div>
            <h1>
                third Component
            </h1>
        </div>);
    }
}

export default CreateInvoiceThird;