import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOperative, IOperativeState } from "./types";
import { AppThunk } from "../../redux-store/store";
import { CALL_API, IAction } from "../../middleware/api";

const initState: IOperativeState = {
  loading: false,
  operatives: [],
  error: "",
};

function getTradesmen_request(state: IOperativeState) {
  state.loading = true;
  state.error = "";
}

function getTradesmen_failure(state: IOperativeState, { error }: IAction) {
  state.loading = false;
  state.error = error;
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initState,
  reducers: {
    getTradesmenStart: getTradesmen_request,
    getTradesmenSuccess(state, { payload }: PayloadAction<IOperative[]>) {
      state.loading = false;
      state.operatives = payload;
    },
    getTradesmenFailure: getTradesmen_failure,
  },
});

export const {
  getTradesmenStart,
  getTradesmenSuccess,
  getTradesmenFailure,
} = employeeSlice.actions;

export default employeeSlice.reducer;

// prettier-ignore
const _getTradesmen = (jobID: number) => ({
  type: "",
  [CALL_API]: {
    types: [
      getTradesmenStart.toString(),
      getTradesmenSuccess.toString(),
      getTradesmenFailure.toString(),
    ],
    endpoint: `Employees/?filter=${JSON.stringify({
        "where": {
          "and": [
            {
              "Current": true
            },
            {
              "Tradesman": true
            },
            {
              "JobID": jobID
            }
          ]
        }
      })}`,
      data: {
        method: "GET",
      },
  },
});

export const getTradesmens = (jobID: number): AppThunk => (dispatch) => {
  return dispatch(_getTradesmen(jobID));
};
