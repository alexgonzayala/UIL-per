import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PDFGen from './PDFGenerator';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import NumberSense from './number-sense/NumberSense';
import GeneralMath from './GeneralMath';
import Home from './Home';
import './App.css'
import LogInPage from './LogIn';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import PracticeNS from './number-sense/PracticeNS';
import NumberSenseOnline from './number-sense/NumberSenseOnline';

function App() {

  // state that tracks if the user is logged in or not.
  // we can use this to conditionally render diff components
  // depending on if the user's login status.
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  // const [username, setUsername] = React.useState("");

  // function settingUser(name) {
  //   setUsername(name);
  // }

  // we no longer need to pass down logIn and settingUser as props
  // to any component because we are using context now. Each component
  // can access the authentication context directly without prop drilling.
  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Home className="container-main"/>}>Home</Route>
        <Route path="/about-us" element={<AboutUs />}>About Us</Route>
        <Route path="/number-sense" element={<NumberSense />}/>
        <Route path="/number-sense/practice" element={<ProtectedRoute><PracticeNS /></ProtectedRoute>}/>
          {/* <Route path="/about" element={<AboutNS />}/> */}
        <Route path="/general-math" element={<GeneralMath />}>General Math</Route>
        <Route path="/contact-us" element={<ContactUs />}>Contact Us</Route>
        <Route path="/log-in" element={<LogInPage />}>Log In</Route>
        <Route path='/pdf-gen' element={<PDFGen />}>PDF Generator</Route>
        <Route path="/sign-up" element={<div><h2>Sign up page coming soon!</h2></div>}>Sign Up Page</Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>Dashboard</Route>
        <Route path="/number-sense/practice/online" element={<ProtectedRoute><NumberSenseOnline /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
