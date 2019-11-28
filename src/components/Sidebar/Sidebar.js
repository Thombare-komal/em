import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
const FontAwesome = require("react-fontawesome");

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
        console.log(this.props);

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

                    <a
                        href="https://www.creative-tim.com?ref=lbd-sidebar"
                        className="simple-text logo-normal"
                    >
                        E-MONEY
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {
                            this.props.routes.map((prop, key) => {
                                if (!prop.redirect)
                                    return (
                                        <li className={prop.upgrade ? "actiive active-pro" : this.activeRoute(prop.layout + prop.path)} key={key} >
                                            <NavLink to={prop.layout + prop.path}
                                                className="nav-link"
                                                activeClassName="active">
                                                {/* <i className={prop.icon} /> */}
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;