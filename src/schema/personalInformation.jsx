import * as Yup from "yup";

export const personalInfoSchema = Yup.object({
  requesterFirstName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "Special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("Please enter your first name."),

  requesterLastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "Special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("Please enter your last name."),

  requesterEmail: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Please enter your email."),

  requesterContact: Yup.string()
    .matches(
      /^\+1\s?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/, 
      "Contact number must be a valid US phone number starting with +1."
    )
    .required("Please enter your contact number."),

  patientFirstName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "Special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("Please enter client's first name."),

  patientLastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "Special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("Please enter client's last name."),

  patientMI: Yup.string()
    .trim()
    .matches(/^[A-Za-z]?$/, "MI must be a single alphabet.")
    .max(1, "MI must be a single character."),

  fareshareUserId: Yup.string(),

  additionalRequests: Yup.string()
    .trim()
    .max(1000, "Maximum 1000 characters allowed."),
});