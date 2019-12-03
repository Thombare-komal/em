import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    render() {
        return (
            <div id="sidebar"
                className="sidebar"
                data-color={this.props.color}
                data-image={this.props.image}>

                <div className="logo">
                    <a
                        href="https://www.creative-tim.com?ref=lbd-sidebar"
                        className="simple-text logo-mini">
                        <div className="logo-img">
                            {/* <img src={logo} alt="logo_image" /> */}
                        </div>
                    </a>
                    <NavLink to='/admin/dashboard' className="header" > EMONEY </NavLink>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {
                            this.props.routes.map((prop, key) => {
                                if (!prop.redirect)
                                    return (
                                        <li className={prop.upgrade ? "actiive active-pro" : this.activeRoute(prop.layout + prop.path)} key={key} >
                                            <NavLink to={prop.layout + prop.path} className="nav-link" activeClassName="active">
                                                <span>
                                                    <i className={prop.icon} > </i><b>{prop.name}</b>
                                                </span>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </div >
        )
    }
}

export default Sidebar;