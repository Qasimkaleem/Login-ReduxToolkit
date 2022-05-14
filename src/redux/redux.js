import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:'',
}

export const loginSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user =state.action
        },
        logout:(state)=>{
            state.user ='' 
        }
    }
})

export const { login,logout } = loginSlice.actions

export default loginSlice.reducer