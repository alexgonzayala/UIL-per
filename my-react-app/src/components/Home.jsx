import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

function Home({ className }) {

    return (<div className={className}>
        <Header />
        <NavBar />
        <Body />
        <Footer />
    </div>);
}

export default Home;