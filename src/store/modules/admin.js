import axios from "axios";

// TYPE
const MEMBER = "admin/MEMBER";
const ASSOCIATE = "admin/ASSOCIATE";
const LEVELUP = "admin/LEVELUP";

// ACTION
export function memberList() {
  const req = axios.get("/api/admin/memberlist").then((res) => res.data);
  return {
    type: MEMBER,
    payload: req,
  };
}

export function associateList() {
  const req = axios.get("/api/admin/associatelist").then((res) => res.data);
  return {
    type: ASSOCIATE,
    payload: req,
  };
}

export function levelUp(dataToSubmit) {
  const req = axios
    .post("/api/admin/levelup", dataToSubmit)
    .then((res) => res.data);
  return {
    type: LEVELUP,
    payload: req,
  };
}

// INITIAL STATE
const initState = {};

// REDUCER
export default function admin(state = initState, action) {
  switch (action.type) {
    case MEMBER:
      return { ...state, list: action.payload };
    case ASSOCIATE:
      return { ...state, list: action.payload };
    case LEVELUP:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
