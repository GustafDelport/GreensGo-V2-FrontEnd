import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Services
import DataService from '../../../services/data.service';

// Styles
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {Panel} from "rsuite";

class LightComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            light: 0
        }
    }

    componentDidMount() {
        const data = JSON.parse(DataService.getAll());
        if (data) {
            this.setState({
                light: data.LightIndex
            });
        }
    }


    render() {
        const { light } = this.state;
        return (
            <Panel header="Light Index" shaded>
                <FontAwesomeIcon icon={faSun} />
                <span style={{marginLeft: '0.5rem'}}>{light}%</span>
            </Panel>
        );
    }
}

export default LightComponent;
