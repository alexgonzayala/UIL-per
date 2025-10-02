import React from "react";
import { useAuth } from "../context/AuthContext";

function Footer() {
    const { user } = useAuth();

    return <footer className="footer">
        {user ? <span>Logged in as {user.username}</span> : <span>Not logged in </span>}
        <span> | &copy; 2025 UIL-per. All rights reserved.</span>
    </footer>;
}

export default Footer;