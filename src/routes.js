import React, { Component } from 'react';
import Dashboard from './views/Dashbord/Dashboard';
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
    layout: '/admin'
  },
  {
    icon: "globe",
    name: " Business Network",
    path: "/businessnetwork",
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