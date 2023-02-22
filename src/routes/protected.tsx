import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isProtected: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isProtected, children }: ProtectedRouteProps) => {
  if (!isProtected) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
