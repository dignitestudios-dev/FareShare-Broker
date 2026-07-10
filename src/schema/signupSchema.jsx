import * as Yup from "yup";

export const signupSchema = Yup.object({
  companyName: Yup.string()
    .max(100, "Company Name cannot exceed 100 characters")
    .required("Company Name is required"),
  accountHandlerName: Yup.string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Special characters are not allowed"
    )
    .max(50, "Maximum 50 characters allowed")
    .required("Account Handler Name is required"),
  companyTaxIdentification: Yup.string()
    .matches(/^\d{9}$/, "Tax Identification Number must be exactly 9 digits")
    .required("Tax Identification Number is required"),

  department: Yup.string().required(
    "You must select a department i.e medical or corporate."
  ),
  email: Yup.string()
    .email("Email must be a valid email.")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter your password"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
