import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'
import DataService from "../../../services/data.service";
//import Lib from '../../../lib/dataHandling.lib';
import {Alert} from "rsuite";

let TemperatureData = []
let TimeData = []
let HumidityData = []
let LightData = []
let MoistureData = []


let data = []

class ChartComponent extends Component {
    constructor(props) {
        super(props);

        DataService.getAllAPI().then(
            res => {                
                for (const dataObj of res.data) {
                    TemperatureData.push(dataObj.Temperature)
                    TimeData.push(dataObj.Time)
                    HumidityData.push(dataObj.HumidityPercentage)
                    MoistureData.push(dataObj.MoisturePercentage)
                    LightData.push(dataObj.LightIndex)
                }
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

    componentDidMount() {
        DataService.getAllAPI().then(
            res => {
                console.log(res.data);
                data = res.data
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
                        labels: TimeData.slice(Math.max(TimeData.length - 5, 0)),
                        datasets:[{
                            label: 'Tempreture',
                            data: TemperatureData.slice(Math.max(TemperatureData.length - 5, 0)),
                            
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 3
                        },{
                            label: 'Humidity',
                            data: HumidityData.slice(Math.max(HumidityData.length - 5, 0)),
                            
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 3
                        },{
                            label: 'Moisture',
                            data: MoistureData.slice(Math.max(MoistureData.length - 5, 0)),
                            
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 3
                        },{
                            label: 'Light',
                            data: LightData.slice(Math.max(LightData.length - 5, 0)),
                            
                            backgroundColor: [
                                'rgba(153, 102, 255, 0.2)'
                            ],
                            borderColor: [
                                'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 3
                        }]
                    }}
                    
                    options = {{
                        maintainAspectRatio: false ,
                        responsive: true
                        
                    }}
                    height = {500}
                    width = {500}
                />
            </div>
        );
    }
}

export default ChartComponent;
