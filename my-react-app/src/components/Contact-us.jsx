import React from "react";
import NavBar from "./NavBar";
// import Header from "./Header";

function ContactUs(props) {
    return (<div>
        <NavBar username={props.username} isLoggedIn={props.isLoggedIn}/>
        <h2>Contact Us!</h2>
    </div>)
}

export default ContactUs;