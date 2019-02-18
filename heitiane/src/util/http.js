import axios from 'axios'
import Qs from "qs"

const http = {
    post (){},
    get (){}
}
http.post = (url, data) => {
    let params = Qs.stringify(data)
    return new Promise((resolve,reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data)
        })
    })
}
http.get = (url , data) => {
    let params = Qs.stringify(data)
    return new Promise((resolve,reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data)
        })
    })
}
export default http;