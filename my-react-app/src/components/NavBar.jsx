import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
// import LogInPage from "./LogIn";

function NavBar() {
    /////////////////////////////////////////////////////////////////////
    // available props:
    // username - string that is the username of the logged in user.
    // isLoggedIn - boolean that tells us if the user is logged in or not.
    /////////////////////////////////////////////////////////////////////
    // need a CSS file for the nav bar itself most likely.
    const {user,logOut} = useAuth();

    return <nav className="navBar">
        <Link to="/"> Home </Link>
        <Link to="/number-sense"> Number Sense </Link>
        <Link to="/general-math"> General Math </Link>
        <Link to="/about-us"> About Us </Link>
        <Link to="/contact-us"> Contact Us </Link>
        <Link to='/dashboard'>Dashboard</Link>
        {user ? <span>Welcome Back {user.username}! <button onClick={logOut}>Log Out</button></span> : 
        (<span><Link to="/sign-up"><button className="signUpButton">Sign Up</button></Link> 
        <Link to="/log-in"><button className="logInButton">Log In</button></Link></span>)}
        
    </nav>;

}

export default NavBar;