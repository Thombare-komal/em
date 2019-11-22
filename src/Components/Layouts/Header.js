import React, { Component, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><p className="header">EMONEY</p></Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Header;