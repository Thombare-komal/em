import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { stringify } from 'querystring';
class AdminNavbarLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        localStorage.clear();
        this.props.history.push("/login/logout");
    }

    render() {
        return (
            <div >
                <button onClick={this.logout} >Log out </button>
            </div>
        );
    }
}

export default AdminNavbarLinks;