import axios from "axios";

// TYPE
const LOGIN = "user/LOGIN";
const REGISTER = "user/REGISTER";
const AUTH = "user/AUTH";

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

export function authUser() {
  const req = axios.get("/api/users/auth").then((res) => res.data);
  return {
    type: AUTH,
    payload: req,
  };
}

// INITIAL STATE
const initState = {
  userData: { id: "guest", isAuth: false },
};

// REDUCER
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload };
    case REGISTER:
      return { ...state, success: action.payload };
    case AUTH:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
