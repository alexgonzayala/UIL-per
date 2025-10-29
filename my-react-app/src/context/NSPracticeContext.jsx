import React, {createContext, useContext, useState} from "react";

const NSPracticeContext = createContext();

export function NSPracticeProvider({children}) {
    const [setup, setSetup] = useState({
            categories: [],
            numQuestions: 20,
            timer: 10 // in minutes
    });

    const updateSetup = (newSettings) => {
        setSetup(newSettings);
    }

    const [results, setResults] = useState(null);

    // implementation of this function will be made later.
    // im thinking it will be called at the end of practice session
    // updating results state with the results of the session. 
    // then, I want this to be stored in the database of the user to then
    // use this data in the dashboard page to show the user's progress over time.
    // i guess this means that we will also have to account for the date and time
    // the session was done.
    const updateResults = (newResults) => {
        setResults(newResults)
    }

    return (<NSPracticeContext.Provider value={{setup, updateSetup, results, updateResults}}>
        {children}
    </NSPracticeContext.Provider>)
}

export function useNSPractice() {
    return useContext(NSPracticeContext);
}
