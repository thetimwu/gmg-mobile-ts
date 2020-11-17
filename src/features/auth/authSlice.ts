import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IAuth, ILoginDetail } from "./types";
// import { API_URL } from "../../middleware/constants";
import { AppThunk } from "../../redux-store/store";
import { CALL_API, IAction } from "../../middleware/api";

const initUserState: IAuth = {
  authToken: null,
  loading: false,
  user: null,
  loggedIn: false,
  error: "",
};

function login_request(state: IAuth) {
  state.loading = true;
  state.error = "";
}

function login_failure(state: IAuth, { error }: IAction) {
  state.loading = false;
  state.error = error;
}

function logout_request(state: IAuth) {
  state.loading = true;
  state.error = "";
}

function logout_failure(state: IAuth, { error }: IAction) {
  state.loading = false;
  state.error = error;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initUserState,
  reducers: {
    loginStart: login_request,
    loginSuccess(
      state,
      { payload }: PayloadAction<{ authToken: string; user: IUser }>
    ) {
      state.user = payload.user;
      state.authToken = payload.authToken;
      state.loading = false;
      state.loggedIn = true;
    },
    loginFailure: login_failure,
    logoutStart: logout_request,
    logoutSuccess(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.user = null;
      state.authToken = null;
      state.loading = false;
      state.loggedIn = false;
      state.error = "";
    },
    logoutFailure: logout_failure,
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;

// export const loginAsync = (credentials: ILoginDetail): AppThunk => async (
//   dispatch
// ) => {
//   dispatch(loginStart());
//   try {
//     const response = await await fetch(`${API_URL}GMGUsers/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...credentials, ttl: 1209600 }),
//     });
//     if (!response.ok) {
//       dispatch(loginFailure(await response.json()));
//       return;
//     }
//     dispatch(loginSuccess(await response.json()));
//   } catch (error) {
//     console.error(error);
//     dispatch(loginFailure(error));
//   }
// };

const _login = (credentails: ILoginDetail) => ({
  type: "",
  [CALL_API]: {
    types: [
      loginStart.toString(),
      loginSuccess.toString(),
      loginFailure.toString(),
    ],
    endpoint: `GMGUsers/login`,
    data: {
      method: "POST",
      body: JSON.stringify({
        username: credentails.username,
        password: credentails.password,
        ttl: 36000,
      }),
    },
  },
});

export const loginAsync = (credentials: ILoginDetail): AppThunk => (
  dispatch
) => {
  return dispatch(_login(credentials));
};

const _logout = () => ({
  type: "",
  [CALL_API]: {
    types: [
      logoutStart.toString(),
      logoutSuccess.toString(),
      logoutFailure.toString(),
    ],
    endpoint: `GMGUsers/logout`,
    data: {
      method: "POST",
    },
  },
});

export const logout = (): AppThunk => (dispatch) => {
  return dispatch(_logout());
};
