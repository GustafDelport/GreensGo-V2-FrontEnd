import React, {Component} from 'react';
import {Icon, Nav, Navbar, Sidebar, Sidenav} from "rsuite";
import NavigationComponent from "./navigation.component";
import { isMobile } from "react-device-detect";

// Styles
const headerStyles = {
    padding: 18,
    fontSize: '1rem',
    height: '2rem',
    background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
};

const headerStylesSmall = {
    padding: 18,
    fontSize: '3rem',
    height: '5rem',
    background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
};

const NavToggle = ({expand, onChange}) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center'}}>
                        <Icon icon={expand ? 'angle-left' : 'angle-right'} />
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

class SidebarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: true,
            openKey: props.openKey || '',
            activeKey: props.activeKey || ''
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        if (isMobile) {
            this.setState({
                expand: false
            });
        }
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        })
    }


    render() {
        const { expand } = this.state;
        return (
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column'}}
                width={expand ? 260 : 56}
                collapsible
            >
                <Sidenav.Header>
                    {!expand ? (
                        <div style={headerStyles}>
                            <Icon icon="leaf" size="lg" style={{verticalAlign: 0}} />
                        </div>
                    ) : (
                        <div style={headerStylesSmall}>
                            <Icon icon="leaf" size="lg" style={{verticalAlign: 0}} />
                        </div>
                    )}
                </Sidenav.Header>
                <Sidenav
                    expanded={expand}
                    defaultOpenKeys={[`${this.state.openKey}`]}
                    activeKey={this.state.activeKey}
                >
                    <NavigationComponent />
                </Sidenav>
                <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
        );
    }
}
export default SidebarComponent;
