import { HttpClient } from "../helpers/httpClient";

const PATH = {
  User: "/api/v1/user",
};

export interface UserData {
  email: string;
  password: string;
}

const login = async (payload: UserData) => {
  try {
    // const newHttpClient = getCustomHttpClient({
    //   "Content-Type": "application/json",
    // , Authorization: `Bearer ${token}`});
    return await HttpClient.post(PATH.User, payload);
  } catch (error) {
    console.debug(error);
    throw { data: null, error };
  }
};

export const LoginService = {
  login,
};
