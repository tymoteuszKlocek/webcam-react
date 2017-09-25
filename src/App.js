import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Dashboard from './dashboard/Dashboard';
import Scanner from './scanner/Scanner';
import MapPage from './map/MapPage';
import LoginPage from './landing-page/LoginPage';

class App extends React.Component {

    render() {
        let x = false;
        return (
            <div className="App">

                <div className="App-header">
                    <h2>Hi USER!!!, welcome to WebcamApp</h2>
                </div>

                <Router>
                    <div className="container">
                        <ul className="nav nav-tabs">
                            <li role="presentation">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/scanner">Scanner</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/map">Map</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/home">Home</Link>
                            </li>
                        </ul>
                        <div >

                            <Route exact path={"/"}
                                render={
                                    () => {
                                        if (x === true) {
                                            return (<div>
                                                <Redirect to="/home" />
                                                <Switch  >
                                                    <Route path={"/scanner"} component={Scanner} />
                                                    <Route path={"/dashboard"} component={Dashboard} />
                                                    <Route path={"/map"} component={MapPage} />
                                                    <Route path={"/home"} component={HomePage} />
                                                </Switch  ></div>)
                                    }
                                        return <LoginPage actions={this.actions}/>
                                    }
                                }
                            />


                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;
