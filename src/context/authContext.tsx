import React, { Dispatch, createContext, useMemo, useReducer } from "react";

import { TAuthAction, authReducer } from "./authReducer";
import { TAuthInitialState, initialState } from "./authStore";

export const AuthContext = createContext<{
  state: TAuthInitialState;
  dispatch: Dispatch<TAuthAction>;
}>({ state: initialState, dispatch: () => {} });

type TAuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const authProviderValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
