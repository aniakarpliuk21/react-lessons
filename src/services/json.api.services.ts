import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";

 let axiosInstance = axios.create({
     baseURL:'https://jsonplaceholder.typicode.com',
     headers:{}
 })
const postService = {
     savePost : ({title,body,userId}:IFormModel):Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance.post(
            '/posts',
            {title,body,userId},
            {headers:{"Content-type": "application/json"}}
            )
     }
}

export {postService}