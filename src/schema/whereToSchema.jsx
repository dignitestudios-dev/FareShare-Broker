import * as Yup from "yup";

export const personalInfoSchema = Yup.object({
  vehicleType: Yup.string().required("Please select a vehicle type."),
});
