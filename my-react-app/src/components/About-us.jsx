import React from "react";
import NavBar from "./NavBar";
// import Header from "./Header";

function AboutUs(props) {
    return (<div>
        <NavBar username={props.username} isLoggedIn={props.isLoggedIn}/>
        <h2>About Us!</h2>
    </div>)
}

export default AboutUs;