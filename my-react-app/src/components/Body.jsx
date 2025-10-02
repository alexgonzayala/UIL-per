import React from "react";

function Body() {
    // setting up a clock that automatically updates every second
    setInterval(updateTime, 1000); // calls updateTime every 1000 milliseconds
    const now = new Date().toLocaleTimeString();
    const [time, setNewTime] = React.useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        return setNewTime(newTime);
    }

    return (<div className="container-body">
        <h2 className="subheading">{time}</h2>
        <p>Welcome to UIL-per, your ultimate resource for mastering UIL Number Sense and General Math competitions! Our platform offers a comprehensive suite of tools designed to help students excel in their mathematical journey. Whether you're looking for practice problems, timed tests, or detailed solutions and explanations, UIL-per has got you covered. Start preparing today and boost your confidence for the competition!</p></div>);
}

export default Body;