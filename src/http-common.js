import axios from "axios";

export default axios.create({
    //http://localhost:3001


    //http://51.195.104.141:6578/dataPoints

    baseURL: 'http://51.195.104.141:6578/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});