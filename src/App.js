import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import AdminLayout from '../src/layouts/Admin';
import Login from '../src/layouts/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
