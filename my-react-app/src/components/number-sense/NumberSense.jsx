import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import PDFGen from "../PDFGenerator";
import Header from "../Header";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer";

function NumberSense() {
    const { user } = useAuth();
    return (<div className="container-main">
        <Header />
        <NavBar />
        <div className="container-body">
            <h2>{user ? <span>Welcome to your Number Sense Page {user.username}!</span>: <span>This is the Number Sense Page!</span>}</h2>
            {/* <Outlet /> */}
            <Link to="practice"><button>Practice Here</button></Link>
            {/* <Link to='/pdf-gen'>Press here for the PDF!</Link> */}
            {/* I'd like to have some sort of interactive element for the user
            to have a choice of what to practice. */}
        </div>
        
        <Footer />
    </div>)
}

export default NumberSense;