import React, {Component} from 'react';
import {Icon, Nav, Sidenav} from "rsuite";

class NavigationComponent extends Component {
    render() {
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="dashboard" to="/" />} href="/">
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="history" to="/history" />} href="/history">
                        History
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        );
    }
}

export default NavigationComponent;
