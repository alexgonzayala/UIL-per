import React, {createContext, useContext, useState} from "react";
import users from "../data/users.jsx";


const AuthContext = createContext();

// this is the component that will wrap around entire app.
export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    
    // async will be useful later when we call API to login bc
    // it will allow us to use the await keyword to wait for server response.
    const logIn = async (username,password) => {
        // perform login logic here, at some point it will call an API
        // to verify username & password, which will use JWT tokens.
        // for now we will make something simple.
        for (let i = 0; i<users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                setUser({username});
                return true;
            }
            return false;
        }
    }

    const logOut = () => {
        setUser(null);
        // later, this will also call an API to log user out on backend.
        // this will involve deleting their JWT token / session.
    }

    return (<AuthContext.Provider value={{user, logIn, logOut}}>
        {children}
    </AuthContext.Provider>);
}

// this is a custom hook that will allow any component to access
// the authentication context, which is essentially a global bucket with
// the user's login status and f'ns to log in and log out.
export function useAuth() {
    return useContext(AuthContext);
}