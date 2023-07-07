
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
name: "user",
initialState:{
    email:"",
    password:"",
    passwordConfirm:"",
},
reducers:{},
extraReducers:{},
});

export default userSlice.reducer;