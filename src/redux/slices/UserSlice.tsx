import {IUserModel} from "../../models/IUserModel";
import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isRejected,
    PayloadAction
} from "@reduxjs/toolkit";
import {userService} from "../../services/Services";
import {AxiosError} from "axios";

type UserSliceType = {
    users:IUserModel[],
    user:IUserModel | null,
    isLoaded:boolean}

const userInitState:UserSliceType={
    users:[],
    user:null,
    isLoaded:false
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async(_,thunkAPI)=>{
        try {
            const users = await userService.getUsers();
            thunkAPI.dispatch(userAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users)
        }catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async(id:string | undefined,thunkAPI) =>{
        if(id){
            try{
                const user = await  userService.getUsersbyId(id);
                return thunkAPI.fulfillWithValue(user)
            }catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }return  null;
    }
)
export const userSlice = createSlice({
    name:'userSlice',
    initialState:userInitState,
    reducers:{
        changeLoadState:(state,action:PayloadAction<boolean>)=>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(
            loadUsers.fulfilled,(state, action) =>{
                state.users = action.payload;
            }
        )
        .addCase(
            loadUsers.rejected,(state, action) =>{}
        )
        .addCase(
            loadUserById.fulfilled,(state, action)=>{
                state.user = action.payload;
        }
        )
        .addCase(
            loadUserById.rejected,(state, action)=>{}
        )
        .addMatcher(isFulfilled(loadUserById,loadUsers),(state,action)=>{
            state.isLoaded = true;
        })
        .addMatcher(isRejected(loadUserById,loadUsers),()=>{})

})

export const userAction = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}