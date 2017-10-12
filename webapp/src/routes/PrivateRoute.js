//@flow
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
    component: React.ComponentType<Props>,
    location: string,
};

const PrivateRoute = ({ component: Component, ...rest }: Props) => (
    <Route {...rest} render={props => (
        requireAuth() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}
                />
            )
    )}
    />
)

function requireAuth() {

    if (!!sessionStorage.getItem('token') && sessionStorage.getItem('token') !== undefined) {
        return true;
    } else {
        return false;
    }
}

export default PrivateRoute;