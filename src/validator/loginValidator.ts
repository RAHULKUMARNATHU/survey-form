import { object, string } from "yup";

export const loginValidation = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});
