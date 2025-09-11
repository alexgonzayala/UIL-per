import React from "react";
import users from "../data/users.jsx";
import { useNavigate } from "react-router-dom";

function LogInPage(props) {
    /////////////////////////////////////////////////////////////////////
    // available props: 
    // logIn (function that sets isLoggedIn to true in App.jsx)
    // settingUser - function that sets the username in App.jsx.
    /////////////////////////////////////////////////////////////////////
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({
        email:"",
        password:""
    })
    

    function handleChange(event) {
        const { name, value } = event.target
        setUserInfo((prevInfo) => {
            return {...prevInfo, [name]:value};
        })
    }

    function handleClick(event) {
        // here is where the login info logic with the backend will take place im
        // pretty sure. Once Submit is clicked, by default behavior the form sends 
        // a POST request, of which we'll learn how to handle, that goes to the 
        // server and causes the page to refresh.
        // console.log("hi i submitted")
        // event.preventDefault();
        // return
        // essentially, if the email and password from userInfo matches a
        // user in users.jsx, then we set isLoggedIn to true.
        /// this is a preliminary way to do this. This is slow, but in the future
        // we'll make this faster with a backend.
        for (let i = 0; i < users.length; i++) {
            if (userInfo.email === users[i].username && userInfo.password === users[i].password) {
                <span>Login successful!</span>
                props.logIn(true);
                props.settingUser(userInfo.email);
                // i want to redirect the user to the home page once they log in.
                navigate("/");
                // return;
                event.preventDefault();
            }
            else {
                <div>Incorrect email or password.</div>
            }
        }
    }

    return <div>
        <h2>Welcome</h2>
        <form>
            <input name="email" type="text" placeholder="email" onChange={handleChange} value={userInfo.email} />
            <input name="password" type="password" placeholder="password" onChange={handleChange} value={userInfo.password}/>
            <button onClick={handleClick}>
                <span>Submit</span>
            </button>
        </form>
    </div>
}

export default LogInPage;