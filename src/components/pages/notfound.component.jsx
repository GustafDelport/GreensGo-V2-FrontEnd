import React, {Component} from 'react';
import SidebarComponent from "../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../global/navigation/footer/footer.components";

class NotFoundComponent extends Component {
    render() {
        return (
            <Container>
                <SidebarComponent activeKey="1" />
                <Container className="container-content">
                    <Header>
                        <h2>404</h2>
                    </Header>
                    <Divider />
                    <Content>
                        <div className="content-inner">
                            <div>
                                <h4>Jy is verlore</h4>
                            </div>
                        </div>
                    </Content>
                    <FooterComponent />
                </Container>
            </Container>
        );
    }
}

export default NotFoundComponent;
