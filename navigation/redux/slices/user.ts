import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface User {
  name: string;
  age: number;
  email: string;
}

interface UserState {
  user: any | null;
}

const initialState: UserState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
