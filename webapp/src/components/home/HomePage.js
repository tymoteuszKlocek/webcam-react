import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Webcam App</h1>
                <p>the best way manage your travel webcmas from the whole world.</p>
                <Link to="login" className="btn btn-primary btn-lg">log in as a test user</Link>
            </div>
        );
    }
}

export default HomePage;