import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {baseUrl} from "../constans/Urls";
import {IPostCommentModel} from "../models/IPostCommentModel";
let axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});
const postServise= {
    getAllPosts : ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    },
    getAllCommentsOfPost : (postId:string):Promise<AxiosResponse<IPostCommentModel[]>> => {
        return axiosInstance.get(`/posts/${postId}/comments`)
    }
}

export{
    postServise,
}