// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/userContext";
// import { routes } from "./routes";

// const ProtectedRoute = ({ children }) => {
//   const { token } = useAuth();
//   console.log(token,'fadslfjhalsdjfhalsjdfhsdjfks')
//   const isToken = token !== null && token !== undefined && token !== "";
//   // const isToken = token ?? false
//   // If no token, force login
//   if (isToken) {
//     return <Navigate to={"/"} replace />;
//   }

//   // If token exists, 
//   //  children safely
//   return children ?? <Navigate to={routes?.DASHBOARD || "/"} replace />;
// };

// export default ProtectedRoute;




import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/userContext";
import { routes } from "./routes";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  const isToken = !!token; // true if token is not null/undefined/empty string

  // If no token → redirect to login
  if (!isToken) {
    return <Navigate to={routes?.LOGIN || "/"} replace />;
  }

  // If token exists → render children
  return children ?? null;
};

export default ProtectedRoute;
