import * as Yup from "yup";

export const profileSchema = Yup.object({
  companyName: Yup.string()
    .matches(/^\S.*$/, "Leading spaces are not allowed")
    .max(100, "Company Name cannot exceed 100 characters")
    .required("Company Name is required"),

  accountHandlerName: Yup.string()
    .matches(/^\S.*$/, "Leading spaces are not allowed")
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Only letters and single spaces between words are allowed"
    )
    .max(50, "Maximum 50 characters allowed")
    .required("Account Handler Name is required"),

  companyTaxIdentification: Yup.string()
    .matches(/^\d{9}$/, "Tax Identification Number must be exactly 9 digits")
    .required("Tax Identification Number is required"),
});