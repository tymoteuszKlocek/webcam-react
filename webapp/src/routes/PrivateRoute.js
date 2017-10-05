import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store/store';

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

    if (!!sessionStorage.getItem('token') && sessionStorage.getItem('token') !== undefined) {
        console.log('Authorisation ok');
        return true;
    } else {
        console.log('no Authorisation!');
        return false;
    }
}

export default PrivateRoute;