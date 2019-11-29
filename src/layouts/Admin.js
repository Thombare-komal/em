import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import routes from '../routes';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    getRoutes = routes => {
        return routes.map((prop, key) => {

            if (prop.layout === "/admin") {
                return (
                    <Route path={prop.layout + prop.path}
                        render={props => (
                            <prop.component {...props} componentName={prop.name} />
                        )}
                        key={key}
                    />
                )
            }
            else {
                return null;
            }
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} routes={routes} />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <AdminNavbar></AdminNavbar>
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        );
    }
}

export default Admin;