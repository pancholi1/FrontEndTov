import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface UserState {
  apellido?: string;
  areaHabilidad?: string;
  areaInteres?: string;
  areaUno?: string;
  areaDos?: string;
  name?: string;
  school?: string;
  email?: string;
  key?: string;
  age?: number;
  urlImage?: string;
  info: string[];
  finalScore?: string;
}

interface objCompleteUser {
  user: UserState | null;
}

const initialState: objCompleteUser = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState | null>) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
