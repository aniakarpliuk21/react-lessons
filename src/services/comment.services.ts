import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constans/Urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});
const commentServise= {
    getAllComment: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}
export{
    commentServise,
}