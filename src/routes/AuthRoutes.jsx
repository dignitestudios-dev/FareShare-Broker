import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import Login from "../pages/authentication/Login";
import Signup from "../pages/onboarding/Signup";
import VerifyOtp from "../pages/authentication/VerifyOtp";
import ChangePassword from "../pages/authentication/ChangePassword";
import AddBank from "../pages/onboarding/AddBank";

export const AuthRoutes = [
  {
    title: "Login",
    url: "/login",
    page: <Login />,
  },

  {
    title: "Forgot Password",
    url: "/forgot-password",
    page: <ForgotPassword />,
  },
  {
    title: "Verify OTP",
    url: "/verify-otp",
    page: <VerifyOtp />,
  },
  {
    title: "Change Password",
    url: "/change-password",
    page: <ChangePassword />,
  },
];
