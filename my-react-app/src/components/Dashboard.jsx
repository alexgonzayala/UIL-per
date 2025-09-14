import React from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const {user} = useAuth();

    return (
        <div>
            <h2>Welcome to your Dashboard {user?.username}!</h2>
            <p>Here you can see your progress in all the different topics you have practiced.</p>
        </div>
    )
}

export default Dashboard;