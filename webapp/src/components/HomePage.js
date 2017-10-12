//@flow
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container-fluid home-page">
                <h1>Webcam App</h1>
                <p>The best way to manage your travel webcmas from around the world.</p>
                <h6>You need to login to have access.</h6>

                <div>
                    <Link to="login" className="btn btn-success login-btn">Login</Link>
                    <Link to="register" className="btn btn-info login-btn">Register</Link>
                </div>

            </div>
        );
    }
}

export default HomePage;