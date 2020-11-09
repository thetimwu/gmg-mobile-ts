import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
// import { programmeSlice } from "../features/programme/programmeSlice";
// import { employeeSlice } from "../features/employee/employeeSlice";
// import { timesheetSlice } from "../features/timesheet/timesheetSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
//   programme: programmeSlice.reducer,
//   operatives: employeeSlice.reducer,
//   timesheet: timesheetSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;