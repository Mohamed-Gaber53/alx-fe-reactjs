// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // لو المستخدم مش مسجل دخول -> يتم التحويل لصفحة login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // لو مسجل دخول -> يعرض الصفحة المطلوبة
  return children;
};

export default ProtectedRoute;
