import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
    return (<div className="container-main">
        <Header />
        <NavBar />
        <div className="container-body">
            <h2>Contact Us!</h2>
        </div>
        <Footer />
    </div>)
}

export default ContactUs;