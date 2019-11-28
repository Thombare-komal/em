import React, { Component } from 'react';
import Dashboard from './views/Dashboard';
import GeneralLedger from './views/GeneralLedger';
import BusinessNetwork from './views/BusinessNetwork';
import Login from './components/login/Login';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-address-card",
    component: Dashboard,
    layout: '/admin'
  },
  {
    icon: "inr",
    name: "General Ledger",
    path: "/generalledger",
    component: GeneralLedger,
    layout: '/admin'
  },
  {
    icon: "globe",
    name: " Business Network",
    path: "/businessnetwork",
    component: BusinessNetwork,
    layout: '/admin'
  },
  {
    icon: "bars",
    name: "Transactions",
    path: "/transactions",
    layout: '/admin'
  },
  {
    icon: "bell-o",
    name: "Notifications",
    path: "/notifications",
    layout: '/admin'
  },
  {
    icon: "cog",
    name: "Settings",
    path: "/settings",
    layout: '/admin'
  },
  {
    icon: "minus-circle",
    name: "Logout",
    path: "/logout",
    component: Login,
    layout: '/login'
  }
];


export default dashboardRoutes;