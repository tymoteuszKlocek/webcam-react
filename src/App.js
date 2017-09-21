import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import './App.css';

import Dashboard from './dashboard/Dashboard';
import Scanner from './scanner/Scanner';
import Map from './map/Map';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: 'Tymoteusz'
        }
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <h2>Hi {this.state.user}, welcome to WebcamApp</h2>
                </div>
                <Router>
                    <div className="container">
                        <ul className="nav nav-tabs">
                            <li role="presentation">
                                <Link to="/"></Link>
                            </li>
                            <li role="presentation">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/scanner">Scanner</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/map">Map</Link>
                            </li>
                        </ul>
                        <div >
                            <Route exact path={"/"} render={() => <Redirect to="/dashboard" component={Dashboard} />} />
                            <Switch  >
                                <Route path={"/scanner"} component={Scanner} />
                                <Route path={"/dashboard"} component={Dashboard} />
                                <Route path={"/map"} component={Map} />
                            </Switch  >
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;
