import axios from "axios";

export default axios.create({
    //http://gus.inventixx.com:6578/dataPoints/all
    baseURL: 'http://gus.inventixx.com:6578/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});