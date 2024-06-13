import {IPostModel} from "../../models/IPostModel";
import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isRejected,
    PayloadAction
} from "@reduxjs/toolkit";
import {postService} from "../../services/Services";
import {AxiosError} from "axios";

type PostSliceType = {
    posts:IPostModel[],
    post:IPostModel | null,
    isLoaded:boolean
}
const postInitState:PostSliceType = {
    posts:[],
    post:null,
    isLoaded:false
}
const loadPosts = createAsyncThunk(
    'postSlice/loadPost',
    async (_,thunkAPI) =>{
        try {
            const posts = await postService.getPosts();
            thunkAPI.dispatch(postAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(posts)
        }catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadPostById = createAsyncThunk(
    'postSlice/loadPostById',
    async(id:string | undefined,thunkAPI) =>{
        if(id){
            try{
                const post = await  postService.getPostbyId(id);
                thunkAPI.dispatch(postAction.changeLoadState(true))
                return thunkAPI.fulfillWithValue(post)
            }catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }return  null;
    }
)

export const postSlice = createSlice({
    name:'postSlice',
    initialState:postInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(
            loadPosts.fulfilled,(state, action)=>{
                state.posts = action.payload;
            }
        )
        .addCase(
            loadPosts.rejected,(state, action)=>{}
        )
        .addCase(
            loadPostById.fulfilled,(state, action)=>{
                state.post = action.payload;
            }
        )
        .addCase(
            loadPostById.rejected,(state, action)=>{}
        )
        .addMatcher(isFulfilled(loadPostById,loadPosts),(state,action)=>{
            state.isLoaded = true;
        })
        .addMatcher(isRejected(loadPostById,loadPosts),()=>{})
})
export const postAction ={
    ...postSlice.actions,
    loadPosts,
    loadPostById
}