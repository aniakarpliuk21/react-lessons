import axios, {AxiosResponse} from "axios";
import {UserResponseModel} from "../models/responseModels/UserResponseModel";
import {PostResponseModel} from "../models/responseModels/PostResponseModel";

let axiosInstance =axios.create({
    baseURL:'https://dummyjson.com/',
    headers:{}
})

const getAllUsers = ():Promise<AxiosResponse<UserResponseModel>> => {
    return axiosInstance.get('users')
}

const getAllPostOfUser =(id:number):Promise<AxiosResponse<PostResponseModel>> => {
    return axiosInstance.get('posts/user/'+id)
}


export {
    getAllUsers,
    getAllPostOfUser
}