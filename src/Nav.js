import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

function Navigation(props) {

    return (
        <Nav bsStyle="tabs" onSelect={props.onSelect}>
            <NavItem eventKey={0} href="#/dashboard">{props.tabs[0]}</NavItem>
            <NavItem eventKey={1} href="#/scanner">{props.tabs[1]}</NavItem>
            <NavItem eventKey={2} href="#/logout">{props.tabs[2]}</NavItem>
        </Nav>
    );
}

export default Navigation;