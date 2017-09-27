import React from 'react';  
import { Route } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import Scanner from '../components/scanner/Scanner';
import MapPage from '../components/MapPage';
import LoginPage from '../auth/LoginPage';
import GalleryList from '../components/GalleryList';
import PrivateRoute from './PrivateRoute';
import WebcamList from '../common/lists/WebcamList';


const RouteComponent = () => (
    <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/gallery/:id" component={GalleryList} />
        <PrivateRoute path="/scanner" component={Scanner} />
        <PrivateRoute path="/map" component={MapPage} />
        <PrivateRoute path="/webcams/:id" component={WebcamList} />
        <Route path="/logout" component={HomePage} />
    </div>
)
export default RouteComponent;