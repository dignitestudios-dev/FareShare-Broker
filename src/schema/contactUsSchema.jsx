import * as Yup from "yup";

export const contactUsSchema = Yup.object({
  name: Yup.string().max(30).required("Name is required."),
  email: Yup.string().email().required("Email is required."),
  subject: Yup.string().required("Subject is required."),
  message: Yup.string().required("Message is required."),
});
