import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

function GeneralMath() {
    return (<div className="container-main">
        <Header />
        <NavBar />
        <div className="container-body">
            <h2>General Math Practice Page!</h2>
        </div>
        <Footer />
    </div>)
}

export default GeneralMath;