import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProgramme, IProgState } from "./types";
import { AppThunk } from "../../redux-store/store";
import { CALL_API, IAction } from "../../middleware/api";
import { authSlice } from "../auth/authSlice";

const initProgState: IProgState = {
  loading: false,
  programme: [],
  error: null,
};

function getProgrammes_request(state: IProgState) {
  state.loading = true;
  state.error = "";
}

function getProgrammes_failure(state: IProgState, { error }: IAction) {
  state.loading = false;
  state.error = error;
}

function getUserProgrammes_request(state: IProgState) {
  state.loading = true;
  state.error = "";
}

function getUserProgrammes_failure(
  state: IProgState,
  { payload }: PayloadAction<any>
) {
  state.loading = false;
  state.error = payload;
}

function remove_Programmes_Error(state: IProgState) {
  state.error = "";
}

export const programmeSlice = createSlice({
  name: "programme",
  initialState: initProgState,
  reducers: {
    getProgrammesStart: getProgrammes_request,
    getProgrammesSuccess(
      state,
      { payload }: PayloadAction<{ programmes: IProgramme[] | [] }>
    ) {
      state.loading = false;
      state.programme = payload.programmes;
    },
    getProgrammesFailure: getProgrammes_failure,
    getUserProgrammesStart: getUserProgrammes_request,
    getUserProgrammesSuccess(
      state,
      { payload }: PayloadAction<{ programmes: IProgramme[] | [] }>
    ) {
      state.loading = false;
      state.programme = payload.programmes;
    },
    getUserProgrammesFailure: getUserProgrammes_failure,
  },
  extraReducers: {
    [authSlice.actions.logoutSuccess.type]: remove_Programmes_Error,
    [authSlice.actions.loginSuccess.type]: remove_Programmes_Error,
  },
});

export const {
  getProgrammesStart,
  getProgrammesSuccess,
  getProgrammesFailure,
} = programmeSlice.actions;

export default programmeSlice.reducer;

const _getProgrammes = (startDate: string, endDate: string) => ({
  type: "",
  [CALL_API]: {
    types: [
      getProgrammesStart.toString(),
      getProgrammesSuccess.toString(),
      getProgrammesFailure.toString(),
    ],
    endpoint: `MenAllocations/programmes`,
    data: {
      method: "POST",
      body: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
      }),
    },
  },
});

export const getProgrammesAsync = (
  startDate: string,
  endDate: string
): AppThunk => (dispatch) => {
  return dispatch(_getProgrammes(startDate, endDate));
};

const _getUserProgrammes = (startDate: string, userId: number) => ({
  type: "",
  [CALL_API]: {
    types: [
      getProgrammesStart.toString(),
      getProgrammesSuccess.toString(),
      getProgrammesFailure.toString(),
    ],
    endpoint: `MenAllocations/programmes`,
    data: {
      method: "POST",
      body: JSON.stringify({
        startDate: startDate,
        EmployeeID: userId,
      }),
    },
  },
});

export const getUserProgrammesAsync = (
  startDate: string,
  userId: number
): AppThunk => (dispatch) => {
  return dispatch(_getUserProgrammes(startDate, userId));
};
