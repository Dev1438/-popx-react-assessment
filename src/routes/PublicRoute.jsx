import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return !isLoggedIn ? children : <Navigate to="/profile" replace />;
}

export default PublicRoute;