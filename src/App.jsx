import "./App.css";
import Splash from "./pages/extras/Splash";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { OnboardingRoutes } from "./routes/OnboardingRoutes";
import ProtectedRoute from "./components/ProtectedRoute";
import UnauthRoute from "./components/UnauthRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />

      {/* AppRoutes Protected must be authenticated*/}
      {AppRoutes.map((route) => {
        return (
          <Route
            path={route?.url}
            element={<ProtectedRoute>{route?.page}</ProtectedRoute>}
            key={route?.title}
          />
        );
      })}

      {/* Authentication routes unprotected must be unauthenticated */}
      {AuthRoutes.map((route) => {
        return (
          <Route
            path={route?.url}
            element={<UnauthRoute>{route?.page}</UnauthRoute>}
            key={route?.title}
          />
        );
      })}

      {/* Onboarding routes unprotected must be unauthenticated */}
      {OnboardingRoutes.map((route) => {
        return (
          <Route
            path={route?.url}
            element={<UnauthRoute>{route?.page}</UnauthRoute>}
            key={route?.title}
          />
        );
      })}
    </Routes>
  );
}

export default App;
