import * as Yup from "yup";

export const addBankSchema = Yup.object({
  routingNumber: Yup.string()
    .max(9)
    .required("Please enter your routing number."),
  accountNumber: Yup.string()
    .min(12)
    .required("Please enter your account number."),
  accountHolderName: Yup.string().required(
    "Please enter your account handler name."
  ),
});
