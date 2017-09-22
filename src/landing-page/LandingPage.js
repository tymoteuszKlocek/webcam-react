import React from 'react';
import Register from './Register';
import Login from './Login';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <Register />
                <Login />
            </div>
        )
    }
}