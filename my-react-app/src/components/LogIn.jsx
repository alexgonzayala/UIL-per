import React from "react";
// import users from "../data/users.jsx"; no longer need to import users here because it's handled by context.
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

function LogInPage() {
    /////////////////////////////////////////////////////////////////////
    // context provides:
    // logIn - function that takes in email and password and logs in user
    //         if credentials are correct, returns true. else, returns false.
    /////////////////////////////////////////////////////////////////////
    const navigate = useNavigate();
    const {logIn} = useAuth();
    const [userInfo, setUserInfo] = React.useState({
        email:"",
        password:""
    })
    const [error, setError] = React.useState("");

    function handleChange(event) {
        const { name, value } = event.target
        setUserInfo((prevInfo) => {
            return {...prevInfo, [name]:value};
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const success = await logIn(userInfo.email, userInfo.password);

        if (success) {
            navigate("/");
        } else {
            setError("Invalid login credentials. Check email and / or password and try again.");
        }
    }

    return (
        <div>
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    onChange={handleChange} 
                    value={userInfo.email} 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={handleChange} 
                    value={userInfo.password}
                />
                <button type="submit">
                    <span>Submit</span>
                </button>
                {/* later, replace style with class name */}
                {error && <p style={{color: 'red'}}><b>{error}</b></p>}
            </form>
            <p>Don't have an account? Head back to <Link to='/'><b>Home</b></Link> for now. Sign up page is coming soon!</p>
        </div>
    );
}

export default LogInPage;