import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers:IUserModel[],
        setFavoriteUser:(objUser:IUserModel)=>void
    },
    postStore: {
        allPosts:IPostModel[],
        setFavoritePost:(objPost:IPostModel)=>void
    },
    commentStore: {
        allComments:ICommentModel[]
    }
}
const defaultValue:StoreType = {
    userStore:{
        allUsers:[],
        setFavoriteUser:()=>{}
    },
    postStore:{
        allPosts:[],
        setFavoritePost:()=>{}
    },
    commentStore:{
        allComments:[]
    }
}
export const MyContext = createContext<StoreType>(defaultValue);
export const useContextProvider = ():StoreType => useContext((MyContext))