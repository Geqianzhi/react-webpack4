import axios from 'axios';
import { message} from 'antd';

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    withCredentials: false,
    headers: {  'Content-Type': 'application/json;charset=UTF-8' ,
                'Authorization': 'Bearer 65090c5a-e0c1-4525-98c0-cc872d611ae2'
            }
});

function msg(err) {
    if (err.code) {
      switch (err.code) {
        case 400:
          message.error(err.code);;
          break;
        case 401:
        message.error("未授权，请登录");
          break;
  
        case 403:
            message.error("拒绝访问");
          break;
  
        case 404:
            message.error("请求地址出错");
          break;
  
        case 408:
            message.error("请求超时");
          break;
  
        case 500:
            message.error("服务器内部错误");
          break;
  
        case 501:
            message.error("服务未实现");
          break;
  
        case 502:
            message.error("网关错误");
          break;
  
        case 503:
            message.error("服务不可用");
          break;
  
        case 504:
            message.error("网关超时");
          break;
  
        case 505:
            message.error("HTTP版本不受支持");
          break;
        default:
      }
    }
  }

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



  // 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    msg(response.data)
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
});

export function get(url,params={}){
    return new Promise((reslove,reject)=>{
        instance.get(url,{
            params
        }).then(res =>{
            reslove(res)
        }).catch(error =>{
            reject(error)
        })
    })
}

export function post(url,data,type='body'){
    return new Promise((reslove ,reject)=>{
        if(type==='body'){
            instance.post(url,{...data})
            .then(res =>{
                reslove(res)
            }).catch(error =>{
                reject(error)
            })
        }
        if(type==='params'){
            instance.post(url,null,{
                params:data
            })
            .then(res =>{
                reslove(res)
            }).catch(error =>{
                reject(error)
            })
        }   
    })
}
export default instance;