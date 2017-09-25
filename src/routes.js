import React from 'react';  
import { Route } from 'react-router-dom';  
import App from './App';  
import HomePage from './components/home/HomePage';  
import LoginPage from './landing-page/LoginPage';  
import Dashboard from './dashboard/Dashboard';  
import Scanner from './scanner/Scanner';  
import MapPage from './map/MapPage';  

export default (  
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/scanner" component={Scanner} />
    <Route path="/map" component={MapPage} />
    <Route path="/dashboard" component={Dashboard}>
      {/* <Route path="/dashboard/new" component={NewDashboard} /> */}
      <Route path="/dashboard/:id" component={Dashboard} />
    </Route>
  </Route>
);