import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';
import DataService from "../../../services/data.service";
import Lib from '../../../lib/dataHandling.lib';
import {Alert} from "rsuite";

class ChartComponent extends Component {
    constructor(props) {
        super(props);

        const data = DataService.getAllData();
        const TemperatureData = Lib.getSpecificItem(data, "Temperature");
        const TimeData = Lib.getSpecificItem(data, "Time")

        this.state = {
            tempData: TemperatureData,
            data: data,
            option: {
                title: {
                    text: "Collected Data"
                },
                tooltip: {},
                legend: {
                    data: TemperatureData
                },
                xAxis: {
                    type: 'category',
                    data: TimeData,
                    label: 'Date'
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: "Temperature",
                        data: TemperatureData,
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            }
        }
    }

    componentDidMount() {
        DataService.getAllAPI().then(
            res => {
                this.setState({
                    data: res.data
                });
            },
            err => {
                const resMessage =
                    (err.response &&
                        err.response.data &&
                        err.response.data.message) ||
                    err.message ||
                    err.toString();

                Alert.error(resMessage);
            }
        )
    }

    render() {
        return (
            <div>
                <ReactECharts
                    option={this.state.option}
                />
            </div>
        );
    }
}

export default ChartComponent;
