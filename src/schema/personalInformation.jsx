import * as Yup from "yup";

export const personalInfoSchema = Yup.object({
  requesterFirstName: Yup.string().required("Please enter your first name."),
  requesterLastName: Yup.string().required("Please enter your last name."),
  requesterEmail: Yup.string().email().required("Please enter your email."),
  requesterContact: Yup.string().required("Please enter your contact number."),
  patientFirstName: Yup.string().required("Please enter client's first name."),
  patientLastName: Yup.string().required("Please enter client's last name."),
  patientMI: Yup.string().required("Please enter client's MI."),
  fareshareUserId: Yup.string().required("Please enter client's Fareshare Id."),
  additionalRequests: Yup.string().max(1000),
});
