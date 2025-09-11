import React from "react";
import NavBar from "./NavBar";
// import Header from "./Header";

function GeneralMath(props) {
    return (<div>

        <NavBar username={props.username} isLoggedIn={props.isLoggedIn}/>
        <h2>General Math Practice Page!</h2>
    </div>)
}

export default GeneralMath;