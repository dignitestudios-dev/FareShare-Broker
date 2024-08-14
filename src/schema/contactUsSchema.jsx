import * as Yup from "yup";

export const contactUsSchema = Yup.object({
  name: Yup.string().max(12).required("Please provide your name."),
  email: Yup.string().email().required("Please enter your email"),
  subject: Yup.string().required("Please provide a subject."),
  message: Yup.string().required("Please add a message."),
});
