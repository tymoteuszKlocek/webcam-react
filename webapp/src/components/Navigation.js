import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect  } from 'react-redux';

class Navigation extends React.Component {

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
                    <li role="presentation" onClick={() => this.props.logout()}>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);