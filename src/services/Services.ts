import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constsns/Urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});
const userService = {
    getUsers:async ():Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data
    },
    getUsersbyId:async(id:string):Promise<IUserModel> => {
        const response = await axiosInstance.get<IUserModel>(urls.users.byId(+id));
        return response.data;
    }
}
const postService = {
    getPosts:async ():Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data
    },
    getPostbyId:async(id:string):Promise<IPostModel> => {
        const response = await axiosInstance.get<IPostModel>(urls.posts.byId(+id));
        return response.data;
    }
}
const commentService = {
    getComments:async ():Promise<ICommentModel[]> => {
        const response = await axiosInstance.get<ICommentModel[]>(urls.comments.base);
        return response.data
    },
    getCommentbyId:async(id:string):Promise<ICommentModel> => {
        const response = await axiosInstance.get<ICommentModel>(urls.comments.byId(+id));
        return response.data;
    }
}

export {
    userService,
    postService,
    commentService
}