import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

export type StoreType = {
    userStore: {
        allUsers:IUserModel[],
        favoriteUser:IUserModel | null,
        loadUsers:(users:IUserModel[])=>void,
        setFavoriteUser:(obj:IUserModel)=>void
    },
    postStore: {
        allPosts:IPostModel[],
        favoritePost:IPostModel | null,
        loadPosts:(posts:IPostModel[])=>void,
        setFavoritePost:(obj:IPostModel)=>void
    },
    commentStore: {
        allComments:ICommentModel[],
        favoriteComment:ICommentModel | null,
        loadComments:(comments:ICommentModel[])=>void,
        setFavoriteComment:(obj:ICommentModel)=>void
    }
}
export const useStore = create<StoreType>()(set=>({
    userStore: {
        allUsers: [],
        favoriteUser: null,
        loadUsers: (users: IUserModel[]) => {
            return set((state) => {
                let newState: StoreType = {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        allUsers: users
                    }
                }
                return newState
            })
        },
        setFavoriteUser: (obj: IUserModel) => {
            return set(state => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        favoriteUser: obj
                    }
                }
            })
        }
    },
    postStore: {
        allPosts: [],
        favoritePost: null,
        loadPosts: (posts: IPostModel[]) => {
            return set((state) => {
                let newState: StoreType = {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        allPosts: posts
                    }
                }
                return newState
            })
        },
        setFavoritePost: (obj: IPostModel) => {
            return set(state => {
                return {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        favoritePost: obj
                    }
                }
            })
        }
    },
    commentStore: {
        allComments: [],
        favoriteComment:null,
        loadComments: (comments: ICommentModel[]) => {
            return set((state) => {
                let newState: StoreType = {
                    ...state,
                    commentStore: {
                        ...state.commentStore,
                        allComments: comments
                    }
                }
                return newState
            })
        },
        setFavoriteComment: (obj: ICommentModel) => {
            return set (state=>{
                return{
                    ...state,
                    commentStore:{
                        ...state.commentStore,
                        favoriteComment:obj
                    }
                }
            })
        }

}
}))
