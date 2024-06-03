import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers:IUserModel[]
    },
    postStore: {
        allPosts:IPostModel[]
    },
    commentStore: {
        allComments:ICommentModel[]
    }
}
const defaultValue:StoreType = {
    userStore:{
        allUsers:[]
    },
    postStore:{
        allPosts:[]
    },
    commentStore:{
        allComments:[]
    }
}
export const MyContext = createContext<StoreType>(defaultValue);
export const useContextProvider = ():StoreType => useContext((MyContext))