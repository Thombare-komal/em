import React, { Component, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import AdminNavbarLinks from '../Navbars/AdminNavbarLinks';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="float-right">
                <Navbar expand="lg">
                    {/* <Navbar.Brand href="#home"><p className="header">EMONEY</p></Navbar.Brand> */}
                    <Navbar.Collapse>
                        <AdminNavbarLinks {...this.props} />
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;