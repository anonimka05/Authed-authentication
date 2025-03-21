import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import "./index.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
// import { VerifyOtp } from "./components/VerifyOtp";

const App: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
    </Routes>
  );
};

export default App;
