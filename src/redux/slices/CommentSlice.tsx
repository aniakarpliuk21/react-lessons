import {ICommentModel} from "../../models/ICommentModel";
import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isRejected,
    PayloadAction
} from "@reduxjs/toolkit";
import {commentService} from "../../services/Services";
import {AxiosError} from "axios";
import {Simulate} from "react-dom/test-utils";
import loadedMetadata = Simulate.loadedMetadata;

type CommentSliceType = {
    comments:ICommentModel[],
    comment:ICommentModel | null,
    isLoaded:boolean;
}
 const commentInitState:CommentSliceType = {
    comments:[],
     comment:null,
     isLoaded:false
 }
 const loadComments =createAsyncThunk(
     'commentSlice/loadComment',
     async (_,thunkAPI)=>{
        try {
            const comments = await commentService.getComments();
            return thunkAPI.fulfillWithValue(comments)
        }catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
     }
 )
const loadCommentById = createAsyncThunk(
    'commentSlice/loadCommentById',
    async(id:string | undefined, thunkAPI) =>{
        if(id){
            try {
                const comment = await commentService.getCommentbyId(id);
                thunkAPI.dispatch(commentAction.changeLoadState(true))
                return thunkAPI.fulfillWithValue(comment)
            }catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }return null
    }
)
 export const commentSlice = createSlice({
     name:'commentSlice',
     initialState:commentInitState,
     reducers:{
         changeLoadState:(state,action:PayloadAction<boolean>)=> {
             state.isLoaded = action.payload
         }
     },
     extraReducers:builder => builder
         .addCase(
             loadComments.fulfilled,(state, action)=>{
             state.comments=action.payload
         })
         .addCase(
             loadComments.rejected,(state, action)=>{})
         .addCase(
             loadCommentById.fulfilled, (state, action)=> {
                 state.comment =action.payload
             })
         .addCase(
             loadCommentById.rejected,(state, action)=>{}
         )
         .addMatcher(
             isFulfilled(loadComments,loadCommentById),(state,action)=>{
             state.isLoaded = true;
         })
         .addMatcher(
             isRejected(loadComments,loadCommentById),(state, action)=>{})
 })
export const commentAction = {
    ...commentSlice.actions,
    loadComments,
    loadCommentById
}