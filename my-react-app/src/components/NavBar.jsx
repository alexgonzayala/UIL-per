import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    // const isLoggedIn = false; // This should be replaced with actual authentication logic
    // need a CSS file for the nav bar itself most likely.
    return <nav className="navBar">
        {/* <a href="/"> Home </a>
        <a href="/number-sense"> Number Sense </a>
        <a href="/general-math"> General Math </a>
        <a href="/about-us"> About Us </a>
        <a href="/contact-us"> Contact Us </a> */}
        <Link to="/"> Home </Link>
        <Link to="/number-sense"> Number Sense </Link>
        <Link to="/general-math"> General Math </Link>
        <Link to="/about-us"> About Us </Link>
        <Link to="/contact-us"> Contact Us </Link>
        <button className="signUpButton"> Sign Up </button>
        <button className="logInButton"> Log In </button>
    </nav>;

}

export default NavBar;