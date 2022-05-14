import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk("todoGetData", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await res.json();
  return response;
});
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tododata: [],
    isloading: false,
  },
  extraReducers: {
    [getTodo.pending]: (state) => {
      state.isloading = true;
    },
    
    [getTodo.fulfilled]: (state, action) => {
      state.tododata = action.payload;
      state.isloading = false;
    },
    [getTodo.rejected]: (state) => {
      state.isloading = false;
    },
  },
});


export default todoSlice.reducer;
