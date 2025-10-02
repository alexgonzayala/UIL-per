import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // apply the theme to the body or root element. 
        // here, we also want to toggle between the different modes we'll set.
        // we also will eventually save the user's preference somehow.
        // for this, we can use local storage, but the backend will eventually
        // handle this. Will it work because of JWT tokens?
        
    })
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}