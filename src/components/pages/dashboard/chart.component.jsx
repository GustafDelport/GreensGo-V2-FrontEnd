import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';
import {Bar} from 'react-chartjs-2'
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

                <Bar
                    data = {{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets:[{
                            label: 'Tempreture',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3
                            
                        },{
                            label: 'Humidity',
                            data: [25, 30 ,45 ,10 , 40, 30],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3
                        },{
                            label: 'Light Index',
                            data: [30, 35 ,50 ,60 , 100, 70],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3  
                        },{
                            label: 'Moisture Level',
                            data: [30, 35 ,30 ,40 , 60, 55],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3  
                        }]
                    }}

                    height = {0}
                    width = {0}
                />

                {/* <ReactECharts
                    option={this.state.option}
                /> */}
            </div>
        );
    }
}

export default ChartComponent;
