import * as Yup from "yup";

export const updatePassSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string().min(6).required("Please confirm your password"),
});
