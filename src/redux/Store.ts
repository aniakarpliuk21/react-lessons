import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/PostSlice";
import {commentSlice} from "./slices/CommentSlice";

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice:commentSlice.reducer
    }
})
type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>();
type AppDispatch = typeof  store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();