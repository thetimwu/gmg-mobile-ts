import { API_URL, REACT_APP_URL } from "../constants/constants";
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

type methods = "GET" | "POST" | "PATCH";

// prettier-ignore
const requestHeaders: HeadersInit = {
  "Accept": "application/json, text/plain, */*",
  "Content-Type": "application/json",
  "Access-Control-Request-Headers": "origin",
  "Origin": `${REACT_APP_URL}`, 
};

const callApi = (
  endpoint: string,
  data: { method: methods; body?: string }
) => {
  const fullUrl =
    endpoint.indexOf(API_URL) === -1 ? API_URL + endpoint : endpoint;

  return fetch(fullUrl, data).then((response) => {
    //loopback returns 204 and no body on logout
    if (response.status === 204) {
      return {};
    }
    if (!response.ok) {
      return response.json().then((error) => {
        const { message, code } = error.error;
        getErrorMessage(response, message, code);
      });
    }
    return response.json();
  });
};

// error code function
function getErrorMessage(response: any, message: string, code: string) {
  switch (code) {
    case "INVALID_TOKEN":
      throw new Error("Session timeout");
    case "BEFORE_REQUEST_DATE":
      throw new Error(message);
    case "MOVE_ATTENDED_ALLOCATION":
      throw new Error(message);
    case "NO_TIMESHEETS":
      throw new Error(message);
    case "JOB_SCHEDULE_NOT_FOUND":
      throw new Error(message);
    case "JOB_SCHEDULE_ALREADY_PART_OF_BLOCK":
      throw new Error(message);
    case "EMPLOYEE_UNDEFINED":
      throw new Error("Employee not defined");
    case "USER_TYPE_UNDEFINED":
      throw new Error("User Type not defined");
    case "INVALID_USER_TYPE":
      throw new Error("Invalid User Type");
    case "DUPLICATE_USER_ID":
      throw new Error("Duplicate User ID");
    case "USER_ALREADY_EXISTS":
      throw new Error("User Already Exists");
    case "PASSWORD_BLANK":
      throw new Error("Password is blank");
    default:
      throw new Error(`Request rejected with status ${response.status}`);
  }
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = "Call API";

export interface IAction {
  type: string;
  payload?: object;
  error?: string;
}

export type apiDataType = {
  method: methods;
  body?: any;
  headers: HeadersInit;
};

export interface IApiAction extends IAction {
  [CALL_API]: {
    types: string[];
    endpoint: string;
    data: apiDataType;
  };
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default ({ getState }: MiddlewareAPI) => (next: Dispatch<Action>) => (
  action: IApiAction | IAction
) => {
  if ("Call API" in action) {
    const callAPI = action[CALL_API];
    let { endpoint, data } = callAPI;
    const { types } = callAPI;

    if (typeof endpoint !== "string") {
      throw new Error("Specify a string endpoint URL.");
    }

    // combines the response data with the action type
    const actionWith = (data: IAction) => {
      // const finalAction: AnyAction = { ...action, ...data }; //Object.assign({}, action, data);
      const finalAction: any = { ...action, ...data };
      delete finalAction[CALL_API];
      return finalAction;
    };

    const [requestType, successType, failureType] = types;

    // add request headers
    data.headers = requestHeaders;
    data.headers.Authorization = getState().auth.authToken;

    next(actionWith({ type: requestType }));

    return callApi(endpoint, data).then(
      (response) => {
        // console.log(response);
        next(actionWith({ payload: response, type: successType }));
      },
      (error) => {
        next(
          actionWith({
            type: failureType,
            error: error.message || "Something bad happened",
          })
        );
      }
    );
  } else {
    return next(action);
  }
};
