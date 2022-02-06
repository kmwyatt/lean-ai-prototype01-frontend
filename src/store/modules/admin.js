import axios from "axios";

// TYPE
const MEMBER = "admin/MEMBER";
const ASSOCIATE = "admin/ASSOCIATE";

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

// INITIAL STATE
const initState = {};

// REDUCER
export default function admin(state = initState, action) {
  switch (action.type) {
    case MEMBER:
      return { ...state, memberList: action.payload };
    case ASSOCIATE:
      return { ...state, associateList: action.payload };
    default:
      return state;
  }
}
