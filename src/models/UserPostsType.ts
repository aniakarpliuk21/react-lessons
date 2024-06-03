import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UserPostsType = IUserModel & {posts:IPostModel[]}