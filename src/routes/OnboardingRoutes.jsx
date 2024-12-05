import Signup from "../pages/onboarding/Signup";
import AddBank from "../pages/onboarding/AddBank";
import VerifyOtp from "../pages/onboarding/VerifyOtp";
import Success from "../pages/extras/Success";

export const OnboardingRoutes = [
  {
    title: "Signup",
    url: "/signup",
    page: <Signup />,
  },
  {
    title: "Verify OTP",
    url: "/verify-otp",
    page: <VerifyOtp />,
  },
  // {
  //   title: "Add Bank",
  //   url: "/add-bank",
  //   page: <AddBank />,
  // },
  {
    title: "Success Create",
    url: "/success/:subId",
    page: <Success />,
  },
];
