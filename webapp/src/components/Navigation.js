//@flow
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { setPosition } from '../actions/positionActions';

type State = {
    position: string
}

type Props = {
    position: string,
    setPosition: () => void,
    logout: () => void,
}

class Navigation extends React.Component<Props, {}> {
    componentWillMount() {
        this.props.setPosition();
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs ">
                    <li role="presentation">
                        <Link to="/dashboard/0">Dashboard</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/scanner/0">Scanner</Link>
                    </li>
                    <li role="presentation">
                        <Link to={'/map/0' + this.props.position}>Map</Link>
                    </li>
                    <li role="presentation" onClick={() => this.logout()}>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        position: state.position,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosition: () => {
            dispatch(setPosition());
        },
        logout: () => {
            dispatch(logout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);