import { Navigate } from "react-router-dom";

// محاكاة حالة تسجيل الدخول
const isAuthenticated = false;

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
