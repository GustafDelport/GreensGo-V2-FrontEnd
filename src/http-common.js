import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3001/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});