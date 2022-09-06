import { getMyInfo } from "src/apis/axios/auth";

export const loginAuth = (username, password) => {
  return {
    type: "LOGIN",
    payload: {
      username: username,
      password: password,
    },
  };
};

const initialState = async () => {
  const { useData: principal } = await getMyInfo();
  return { principal };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return;
    default:
      return state;
  }
};

export default authReducer;
