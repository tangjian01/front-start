import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: '/api',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        error.data = {};
        if(!error.response){

        }
        else if(error.response.status == 404){
            //未找到
        }
        else if(error.response.status == 403){
            //未登录
            window.location = 'http://127.0.0.1:8011/#/login';
        }
        else if(error.response.status == 401){//未授权

        }
        else {
            error.data.message = "未知错误";
        }
        return Promise.reject();
    }
);


export default service;
