import axios from 'axios'

axios.create({
    baseURL:'https://www.bilibili.com/',
    timeout:5000
})

export default httpInstance

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config

},e=>Promise.reject(e))

//axios响应式拦截器
httpInstance.interceptors.reponse.use(res=>res.data, e=>{
    return Promise.reject(e)
})