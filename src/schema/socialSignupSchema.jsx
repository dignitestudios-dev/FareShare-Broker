import * as Yup from "yup";

export const socialSignupSchema = Yup.object({
  companyName: Yup.string().required("Please enter the company name"),
  accountHandlerName: Yup.string().required(
    "Please enter the account handler name"
  ),

  companyTaxIdentification: Yup.string().required(
    "Please enter the tax identification number."
  ),
  department: Yup.string().required(
    "You must select a department i.e medical or corporate."
  ),
  email: Yup.string().email().required("Please enter your email"),
});
