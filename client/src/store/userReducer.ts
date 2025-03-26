
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface User{
    _id: string,
    fullName: string,
    email:string,
    photo:string
}

const initialState = {
    currentUser: {},
    error: '',
    isLoading: false,
    isLoggedIn: false
}
 const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginInStart: (state) => {
            state.isLoading = true
        },
        logInSuccess: (state, action: PayloadAction<User>) =>{
            state.currentUser = action.payload;
            state.isLoading = false;
            state.error = '';
            state.isLoggedIn = true;
        },
        logInFail :(state, action: PayloadAction<string>) =>{
            state.currentUser = {};
            state.error = action.payload;
            state.isLoading = false;
            state.isLoggedIn = false;
        }

    }
});

export const { logInFail, loginInStart, logInSuccess } = userSlice.actions
export default userSlice.reducer