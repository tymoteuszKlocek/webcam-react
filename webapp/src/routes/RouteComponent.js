import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import Scanner from '../components/scanner/Scanner';
import MapPage from '../components/MapPage';
import LoginPage from '../components/auth/LoginPage';
import PrivateRoute from './PrivateRoute';
import Register from '../components/auth/Register';

const RouteComponent = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard/:id" component={Dashboard} />
            <PrivateRoute path="/scanner/:query" component={Scanner} />
            <PrivateRoute path="/map/:localisation" component={MapPage} />
            <Route path="/logout" component={HomePage} />
        </Switch>
    </div>
)

export default RouteComponent;