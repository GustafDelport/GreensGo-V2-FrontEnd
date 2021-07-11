import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Services
import DataService from '../../../services/data.service';

// Styles
import {faWater} from "@fortawesome/free-solid-svg-icons";
import {Panel} from "rsuite";

class HumidityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humidity: 0
        }
    }

    componentDidMount() {
        const data = JSON.parse(DataService.getAll());
        if (data) {
            this.setState({
                humidity: data.HumidityPercentage
            });
        }
    }

    render() {
        const { humidity } = this.state;
        return (
            <Panel header="Humidity" shaded>
                <FontAwesomeIcon icon={faWater} />
                <span style={{marginLeft: '0.5rem'}}>{humidity}%</span>
            </Panel>
        );
    }
}

export default HumidityComponent;
