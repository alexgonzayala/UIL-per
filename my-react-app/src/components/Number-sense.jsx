import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import PDFGen from "./PDF-generator";
import Header from "./Header";

function NumberSense(props) {

    return (<div>
        <Header />
        <NavBar username={props.username} isLoggedIn={props.isLoggedIn}/>
        <h2>Number Sense Practice Page!</h2>
        {/* <Link to='/pdf-gen'>Press here for the PDF!</Link> */}
        {/* I'd like to have some sort of interactive element for the user
        to have a choice of what to practice. */}
    </div>)
}

export default NumberSense;