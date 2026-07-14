import * as Yup from "yup";

const nameRegex = /^[A-Za-z]+$/;

export const personalInfoSchema = Yup.object({
  requesterFirstName: Yup.string()
    .trim()
    .required("Please enter your first name.")
    .matches(nameRegex, "Numbers and special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed."),

  requesterLastName: Yup.string()
    .trim()
    .required("Please enter your last name.")
    .matches(nameRegex, "Numbers and special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed."),

  requesterEmail: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Please enter your email."),

  requesterContact: Yup.string()
    .matches(
      /^\+1\s?\d{3}-\d{3}-\d{4}$/,
      "Contact number must be a valid US phone number."
    )
    .required("Please enter your contact number."),

  patientFirstName: Yup.string()
    .trim()
    .required("Please enter client's first name.")
    .matches(nameRegex, "Numbers and special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed."),

  patientLastName: Yup.string()
    .trim()
    .required("Please enter client's last name.")
    .matches(nameRegex, "Numbers and special characters are not allowed.")
    .max(50, "Maximum 50 characters allowed."),

  patientMI: Yup.string()
    .trim()
    .matches(/^[A-Za-z]?$/, "MI must be a single alphabet.")
    .max(1, "MI must be a single character."),

  fareshareUserId: Yup.string(),

  additionalRequests: Yup.string()
    .trim()
    .max(1000, "Maximum 1000 characters allowed."),
});