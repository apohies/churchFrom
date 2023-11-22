import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'pepe'
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name} = action.payload;
      state.name = name;
    },
   
    changeName : (state,action)=>{

      state.name = action.payload;
    }
  },
});

export const { addUser , changeName } = userSlice.actions;
export default userSlice.reducer;
