import "./App.css";
import Splash from "./pages/extras/Splash";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { OnboardingRoutes } from "./routes/OnboardingRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />

      {/* AppRoutes Protected must be authenticated*/}
      {AppRoutes.map((route) => {
        return (
          <Route path={route?.url} element={route?.page} key={route?.title} />
        );
      })}

      {/* Authentication routes unprotected must be unauthenticated */}
      {AuthRoutes.map((route) => {
        return (
          <Route path={route?.url} element={route?.page} key={route?.title} />
        );
      })}

      {/* Onboarding routes unprotected must be unauthenticated */}
      {OnboardingRoutes.map((route) => {
        return (
          <Route path={route?.url} element={route?.page} key={route?.title} />
        );
      })}
    </Routes>
  );
}

export default App;
