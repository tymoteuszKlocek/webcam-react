import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Webcam App</h1>
                <p>the best way manage your travel webcmas from the whole world.</p>
                <h5> You need to login to have access. </h5>
                <Link to="login" className="btn btn-primary btn-lg">Login</Link>
            </div>
        );
    }
}

export default HomePage;