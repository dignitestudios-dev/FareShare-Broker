import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import Login from "../pages/authentication/Login";
import Signup from "../pages/onboarding/Signup";
import VerifyForgotOtp from "../pages/authentication/VerifyForgotOtp";
import ChangePassword from "../pages/authentication/ChangePassword";

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
    title: "Verify Otp OTP",
    url: "/verify-forgot-otp",
    page: <VerifyForgotOtp />,
  },
  {
    title: "Change Password",
    url: "/change-password",
    page: <ChangePassword />,
  },
];
