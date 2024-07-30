import Signup from "../pages/onboarding/Signup";
import AddBank from "../pages/onboarding/AddBank";

export const OnboardingRoutes = [
  {
    title: "Signup",
    url: "/signup",
    page: <Signup />,
  },
  {
    title: "Add Bank",
    url: "/add-bank",
    page: <AddBank />,
  },
];
