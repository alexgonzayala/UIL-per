import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// this component will wrap around any component that we want to protect.
// if user is not logged in, it will redirect them to login page.
export default function ProtectedRoute({children}) {
    const {user} = useAuth();

    if (!user) {
        // user is not logged in, redirect to login page.
        // replace keyword prevents user from going back to protected page
        // after being redirected to login page by erasing "/protected-element"
        // from history stack.
        return <Navigate to="/log-in" replace />;
    }
    // user is logged in, allow them to see protected component.
    return children;
}