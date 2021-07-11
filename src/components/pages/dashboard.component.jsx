import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {Col, Container, Content, Divider, FlexboxGrid, Header} from "rsuite";
import Clock from 'react-live-clock';

// Components
import SidebarComponent from "../global/navigation/sidebar/sidebar.component";
import FooterComponent from "../global/navigation/footer/footer.components";
import TemperatureComponent from "./dashboard/temperature.component";
import HumidityComponent from "./dashboard/humidity.component";
import LightComponent from "./dashboard/light.component";
import MoistureLevelComponent from "./dashboard/moisturelevel.component";
import ChartComponent from "./dashboard/chart.component";

class DashboardComponent extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Container>
                    <SidebarComponent activeKey="1" />
                    <Container className="container-content">
                        <Header>
                            <h2>
                                Dashboard
                                <span style={{float: 'right', display: 'inline-block', fontSize: '1.25rem'}}><Clock format={'MMMM Do YYYY - h:mm:ss a'} ticking={true} timezone={'Africa/Johannesburg'} /></span>
                            </h2>
                        </Header>
                        <Divider />
                        <Content>
                            <FlexboxGrid justify="space-around" style={{marginTop: '2rem'}}>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                                    <TemperatureComponent />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                                    <HumidityComponent />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                            <FlexboxGrid justify="space-around" style={{marginTop: '2rem'}}>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                                    <LightComponent />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                                    <MoistureLevelComponent />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                            <ChartComponent />
                        </Content>
                        <FooterComponent />
                    </Container>
                </Container>
            </>
        );
    }
}

export default DashboardComponent;
