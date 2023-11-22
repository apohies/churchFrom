import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ''
  };
  

  export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
      AddToken: (state, action) => {
  
        state.token = action.payload
      }
     
     
    },
  });
  

  export const { AddToken  } = loginSlice.actions;
export default loginSlice.reducer;
