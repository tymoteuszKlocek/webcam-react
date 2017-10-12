import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteComponent from './routes/RouteComponent';
import Navigation from './components/Navigation';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router >
                    <div className="container">
                        <div>
                            <Navigation />
                        </div>
                        <RouteComponent />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;