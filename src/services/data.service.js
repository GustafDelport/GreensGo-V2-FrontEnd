import http from '../http-common';
import Lib from '../lib/dataHandling.lib';

class Data {
    getAll() {
        return localStorage.getItem("dataFetched");
        // return http.get(`/all`);
    }

    getAllData() {
        return localStorage.getItem("allData");
        // return http.get(`/all`);
    }

    getAllAPI() {
        return http.get(`/all`);
    }

    async getAllGlobal() {
        await http.get(`/all`).then(res => {
            const AllData = res.data;
            const data = Lib.lastObject(res.data);
            if (data && AllData) {
                localStorage.setItem("dataFetched", JSON.stringify(data));
                localStorage.setItem("allData", AllData);
            }
        })
        return http.get(`/all`);
    }
}

export default new Data();