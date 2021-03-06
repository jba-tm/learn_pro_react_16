import Axios from "axios";

export class RestDataSource {
    // constructor(base_url) {
    //     this.BASE_URL = base_url;
    // }

    constructor(base_url, errorCallback) {
        this.BASE_URL = base_url;
        this.handleError = errorCallback;
    }

    GetData(callback) {
        this.SendRequest("get", this.BASE_URL, callback);
    }

    async GetOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
    }

    async Store(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
    }

    async Update(data, callback) {
        this.SendRequest("put", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    // SendRequest(method, url, callback) {
    //     Axios.request({
    //         method: method,
    //         url: url
    //     }).then(response => callback(response.data));
    // }

    // async SendRequest(method, url, callback) {
    //     let response = await Axios.request({
    //         method: method,
    //         url: url
    //     })
    //     callback(response.data)
    // }

    // async SendRequest(method, url, callback) {
    //     callback((await Axios.request({
    //         method: method,
    //         url: url
    //     })).data);
    // }

    // async SendRequest(method, url, callback, data) {
    //     callback((await Axios.request({
    //         method: method,
    //         url: url,
    //         data: data
    //     })).data);
    // }

    async SendRequest(method, url, callback, data) {
        try {
            callback((await Axios.request({
                method: method,
                url: url,
                data: data
            })).data);
        } catch(err) {
            this.handleError("Operation Failed: Network Error");
        }
    }
}