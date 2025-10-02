import React from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
    const {user} = useAuth();

    return (
        <div className="container-main">
            <Header />
            <NavBar />
            <div className="container-body">
                <h2>Welcome to your Dashboard {user?.username}!</h2>
                <p>Here you can see your progress in all the different topics you have practiced.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;