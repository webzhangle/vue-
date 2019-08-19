import axios from 'axios';
import env from '@/config/env';
import Qs from 'qs'
import { getCookie } from '../common/util'
const MOCKURL = ''; // mock数据地址

/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
});

// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Accept'] = 'application/json';
    config.headers['Terminal-Agent'] = 'iOS';
    config.headers['Package-Name'] = 'com.onair.mycoach';
    config.headers['Resource-Id'] = 'com.onair.mycoach';
    config.headers['Version-Name'] = '2.0.1';
    config.headers['Version-Code'] = '2';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let userId = ''
    if (JSON.parse(localStorage.getItem('userinfo')) && JSON.parse(localStorage.getItem('userinfo')).userId) {
        userId = JSON.parse(localStorage.getItem('userinfo')).userId
    }
    let session = ''
    if (JSON.parse(localStorage.getItem('userinfo')) && JSON.parse(localStorage.getItem('userinfo')).session) {
        session = JSON.parse(localStorage.getItem('userinfo')).session
    }
    config.headers['Login-UserId'] = userId;
    config.headers['Authentication'] = session;
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
AJAX.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.response) {
    }
    return Promise.reject(error);
});

// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {}) {
        return AJAX.get(url, {
            params: param,
            headers,
        })
    },
    post(url, param = {}, headers = {}) {
        return AJAX.post(url, Qs.stringify(param), {
            headers,
        })
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers,
        })
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    }
}
