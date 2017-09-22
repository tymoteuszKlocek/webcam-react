import React from 'react';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
                <form className="new-account-form hide">
                    <p>Create account</p>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-username">Username</label>
                        <input name="new-username" type="text" className="form-control" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">Password</label>
                        <input name="new-password" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Repeat password</label>
                        <input name="confirm-password" type="password" className="form-control" placeholder="reapeat password" />
                    </div>
                    <input type="submit" name="submit-register" className="btn btn-primary" calue="Create new account" />
                    <input type="button" name="input-login" className="btn btn-default" value="Back" />
                </form>
            </div>
        )
    }
}

