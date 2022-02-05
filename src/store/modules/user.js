import axios from "axios";

// TYPE
const LOGIN = "user/LOGIN";
const REGISTER = "user/REGISTER";

// ACTION
export function loginUser(dataToSubmit) {
  const req = axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data);
  return {
    type: LOGIN,
    payload: req,
  };
}

export function registerUser(dataToSubmit) {
  const req = axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => res.data);
  return {
    type: REGISTER,
    payload: req,
  };
}

// INITIAL STATE
const initState = {};

// REDUCER
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload };
    case REGISTER:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
