import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

const getAllUsers = ():Promise<AxiosResponse<IUserModel[]>> =>{
    return axiosInstance.get('/users')
}
const getAllPostOfUser = (id:number):Promise<AxiosResponse<IPostModel[]>> =>{
    return axiosInstance.get('/posts?userId='+id)
}
export {
    getAllUsers,
    getAllPostOfUser
}

