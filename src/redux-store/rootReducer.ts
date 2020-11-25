import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { programmeSlice } from "../features/programme/programmeSlice";
import { employeeSlice } from "../features/employee/employeeSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  programme: programmeSlice.reducer,
  operatives: employeeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
