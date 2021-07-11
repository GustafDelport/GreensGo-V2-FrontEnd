import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Services
import DataService from '../../../services/data.service';

// Styles
import {faTemperatureHigh} from "@fortawesome/free-solid-svg-icons";
import {Panel} from "rsuite";

class TemperatureComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0
        }
    }

    componentDidMount() {
        const data = JSON.parse(DataService.getAll());
        if (data) {
            this.setState({
                temp: data.Temperature
            });
        }
    }

    render() {
        const { temp } = this.state;
        return (
            <Panel header="Temperature" shaded>
                <FontAwesomeIcon icon={faTemperatureHigh} />
                <span style={{marginLeft: '0.5rem'}}>{temp} Celsius</span>
            </Panel>
        );
    }
}

export default TemperatureComponent;
