import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Services
import DataService from '../../../services/data.service';

// Styles
import {faTint} from "@fortawesome/free-solid-svg-icons";
import {Panel} from "rsuite";

class MoistureLevelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moisture: 0
        }
    }

    componentDidMount() {
        const data = JSON.parse(DataService.getAll());
        if (data) {
            this.setState({
                moisture: data.MoisturePercentage
            });
        }
    }

    render() {
        const { moisture } = this.state;
        return (
            <Panel header="Moisture Level" shaded>
                <FontAwesomeIcon icon={faTint} />
                <span style={{marginLeft: '0.5rem'}}>{moisture}%</span>
            </Panel>
        );
    }
}

export default MoistureLevelComponent;
