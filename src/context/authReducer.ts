import { TAuthInitialState } from "./authStore";

export type TAuthAction = {
  type: "SET_USER" | "REMOVE_USER";
  payload?: { token: string; user: { _id: string; email: string } | null };
};

export const authReducer = (state: TAuthInitialState, action: TAuthAction) => {
  switch (action.type) {
    case "SET_USER":
      if (action.payload?.token) {
        localStorage.setItem("TOKEN", action.payload?.token as string);
      }

      return {
        ...state,
        ...action.payload,
        isAuthorized: true,
      };
    case "REMOVE_USER":
      localStorage.clear();

      return {
        ...state,
        user: null,
        token: "",
        isAuthorized: false,
      };
    default:
      return state;
  }
};
