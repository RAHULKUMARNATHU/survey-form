import { object, string } from "yup";

export const surveyFormValidation = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  phoneNumber: string().required("Phone is required"),
  address: string().required("Address is required"),
  nationality: string().required("Nationality is required"),
  message: string().required("Message is required"),
  gender: string().required("Gender is required"),
});
