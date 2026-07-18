import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
