import React, { Component, useState } from 'react';
import Dashboard from '../Dashbord';
import Login from '../login/Login';

class Main extends Component {

    render() {
        return (
            <div>
              {/* <Dashboard /> */}
              <Login></Login>
            </div>
        )
    }
}

export default Main;