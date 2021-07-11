import React, {Component} from 'react';
import {Footer} from "rsuite";

class FooterComponent extends Component {
    render() {
        return (
            <Footer style={{textAlign: 'center'}}>Copyright ©GreensGo {new Date().getFullYear()}</Footer>
        );
    }
}

export default FooterComponent;
