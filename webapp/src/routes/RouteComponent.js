import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import Scanner from '../components/scanner/Scanner';
import MapPage from '../components/MapPage';
import LoginPage from '../auth/LoginPage';
import PrivateRoute from './PrivateRoute';
//import WebcamList from '../components/WebcamList';

const RouteComponent = () => (
    <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="dashboard/:id" component={Dashboard} />
        <PrivateRoute path="/scanner" component={Scanner} />
        <PrivateRoute path="/map" component={MapPage} />
        <Route path="/logout" component={HomePage} />
    </div>
)

export default RouteComponent;