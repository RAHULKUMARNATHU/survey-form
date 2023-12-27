export type TAuthInitialState = {
  isAuthorized: boolean;
  token: string;
  user: { _id: string; email: string } | null;
};

export const initialState: TAuthInitialState = {
  isAuthorized: false,
  token: "",
  user: null,
};
