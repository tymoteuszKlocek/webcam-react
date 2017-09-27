import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        requireAuth() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

function requireAuth() {
    if (sessionStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
}

export default PrivateRoute;