import React, { Component } from 'react';
import Dashboard from './views/Dashboard';
import GeneralLedger from './views/GeneralLedger';
import BusinessNetwork from './views/BusinessNetwork';
import Login from './components/login/Login';


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "glyphicon glyphicon-dashboard",
    component: Dashboard,
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-usd",
    name: "General Ledger",
    path: "/generalledger",
    component: GeneralLedger,
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-globe",
    name: " Business Network",
    path: "/businessnetwork",
    component: BusinessNetwork,
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-list-alt",
    name: "Transactions",
    path: "/transactions",
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-bell",
    name: "Notifications",
    path: "/notifications",
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-cog",
    name: "Settings",
    path: "/settings",
    layout: '/admin'
  },
  {
    icon: "glyphicon glyphicon-minus-sign",
    name: "Logout",
    path: "/logout",
    component: Login,
    layout: '/login'
  }
];


export default dashboardRoutes;