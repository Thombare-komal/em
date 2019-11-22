import NAV from '../static/static';
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');


const navLink = NAV.map((data, id) => {
    return <li key={id}>
        <span className="icon-margin">
            <FontAwesome  name={data.icon} className="fa-size" />
        </span>
        <a href="#">{data.name}</a>
    </li>
})

class NavbarLinks extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <ul>
                        {navLink}
                    </ul>
                </Nav>
            </div>
        )
    }
}


export default NavbarLinks;