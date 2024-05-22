import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
});
const userServise= {
    getAllUsers : ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    }
}
const postServise= {
    getAllPosts : ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    }
}
const commentServise= {
    getAllComment: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}
export{
    userServise,
    postServise,
    commentServise,
}