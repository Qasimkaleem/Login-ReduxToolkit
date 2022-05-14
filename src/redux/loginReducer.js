import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:'',
    passeord:''
}
export const loginSlice = createSlice({
    name: 'userAuth',
    initialState
    ,
        reducers:{
            login:(state,action)=>{
                
                state.user = action.payload
            },
            logout: (state)=>{
                state.user =''
            }
        }    
})
export const {login , logout}= loginSlice.actions

export default loginSlice.reducer