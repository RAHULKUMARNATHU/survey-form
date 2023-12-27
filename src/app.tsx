import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch({
        type: "SET_USER",
        payload: { token: localStorage.getItem("TOKEN")!, user: null },
      });
      return;
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
