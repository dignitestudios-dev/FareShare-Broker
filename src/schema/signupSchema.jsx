import * as Yup from "yup";

export const signupSchema = Yup.object({
  companyName: Yup.string().required("Please enter the company name"),
  accountHandlerName: Yup.string().required(
    "Please enter the account handler name"
  ),

  companyTaxIdentification: Yup.string()
    .required("Please enter the tax identification number.")
    .matches(/^\d+$/, "Tax Identification number must be a numeric value."),

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
