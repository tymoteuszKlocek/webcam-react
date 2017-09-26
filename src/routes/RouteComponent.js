import React from 'react';  
import { Route } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import Dashboard from '../dashboard/Dashboard';
import Scanner from '../scanner/Scanner';
import MapPage from '../map/MapPage';
import LoginPage from '../auth/LoginPage';
import GalleryList from '../gallery/GalleryList';
import PrivateRoute from './PrivateRoute';

const RouteComponent = () => (
    <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/gallery/:id" component={GalleryList} />
        <PrivateRoute path="/scanner" component={Scanner} />
        <PrivateRoute path="/map" component={MapPage} />
        <Route path="/logout" component={HomePage} />
    </div>
)
export default RouteComponent;