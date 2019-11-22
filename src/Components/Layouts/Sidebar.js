import React, { Component } from 'react';
import NavbarLinks from './NavbarLinks';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-wrapper">
                    <NavbarLinks />
                </div>
            </div>
        )
    }
}

export default Sidebar;