import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function NumberSenseOnline() {
    const { user } = useAuth();
    return (<div>
        <h2>Welcome to Online Practicing {user.username}!</h2>
    </div>)
}

export default NumberSenseOnline;