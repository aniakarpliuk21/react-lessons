import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {baseUrl, urls} from "../constans/Urls";
import {IUserPostModel} from "../models/IUserPostModel";
let axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});
const userServise= {
    getAllUsers : ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(urls.allUsers)
    },
    getPostOfUser : (userId:string):Promise<AxiosResponse<IUserPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}
export{
    userServise
}