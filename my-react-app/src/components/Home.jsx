import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Body from "./Body";

function Home(props) {
    // available props: 
    // isLoggedIn - boolean that tells us if the user is logged in or not.
    // username - string that is the username of the logged in user. This
    ///// is set in LogIn.jsx when the user logs in successfully. 
    return (<div>
        <Header />
        <NavBar username={props.username} isLoggedIn={props.isLoggedIn}/>
        <Body />
    </div>);
}

export default Home;