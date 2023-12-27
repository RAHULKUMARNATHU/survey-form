import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidation } from "../../validator/loginValidator";
import { LoginService } from "../../services/login";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

type TInitialValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (values: TInitialValues) => {
    try {
      const res = await LoginService.login(values);
      if (res.data.status !== "success") {
        return;
      }
      dispatch({
        type: "SET_USER",
        payload: { token: res.data.token, user: res.data.data.user },
      });
      navigate("/admin");
    } catch (err) {
      console.log("some error occurred", err);
    }
  };

  useEffect(() => {
    if (state.isAuthorized) {
      navigate("/admin");
    }
  }, [state]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Formik
        validationSchema={loginValidation}
        onSubmit={(values) => handleLogin(values)}
        initialValues={{ email: "", password: "" }}
      >
        <Form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
