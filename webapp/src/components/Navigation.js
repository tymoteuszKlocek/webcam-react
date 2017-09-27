import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    logout() {
        sessionStorage.setItem('token', '');
    }

    render() {
        return (
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
                    <li role="presentation" onClick={() => this.logout()}>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;