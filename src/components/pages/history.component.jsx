import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import SidebarComponent from "../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../global/navigation/footer/footer.components";
import TableComponent from "./history/table.component";

class HistoryComponent extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>History</title>
                </Helmet>
                <Container>
                    <SidebarComponent activeKey="2" />
                    <Container className="container-content">
                        <Header>
                            <h2>History</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                <div>
                                    <TableComponent />
                                </div>
                            </div>
                        </Content>
                        <FooterComponent />
                    </Container>
                </Container>
            </>
        );
    }
}

export default HistoryComponent;
