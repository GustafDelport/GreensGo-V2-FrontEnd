import axios from "axios";

export default axios.create({
    //http://gus.inventixx.com:6578/dataPoints/all
    baseURL: 'http://51.195.104.141:6578/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});