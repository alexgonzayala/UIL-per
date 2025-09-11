import React from 'react'
import { Route, Routes} from 'react-router-dom'
import PDFGen from './PDF-generator';
import ContactUs from './Contact-us';
import AboutUs from './About-us';
import NumberSense from './Number-sense';
import GeneralMath from './General-math';
import Home from './Home';
import './App.css'
import LogInPage from './LogIn';

function App() {

  // state that tracks if the user is logged in or not.
  // we can use this to conditionally render diff components
  // depending on if the user's login status.
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [username, setUsername] = React.useState("");

  function settingUser(name) {
    setUsername(name);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home username={username} isLoggedIn={isLoggedIn}/>}>Home</Route>
        <Route path="/about-us" element={<AboutUs username={username} isLoggedIn={isLoggedIn}/>}>About Us</Route>
        <Route path="/number-sense" element={<NumberSense username={username} isLoggedIn={isLoggedIn}/>}>Number Sense</Route>
        <Route path="/general-math" element={<GeneralMath username={username} isLoggedIn={isLoggedIn}/>}>General Math</Route>
        <Route path="/contact-us" element={<ContactUs username={username} isLoggedIn={isLoggedIn}/>}>Contact Us</Route>
        <Route path="/log-in" element={<LogInPage settingUser={settingUser} logIn={setIsLoggedIn}/>}>Log In</Route>
        <Route path='/pdf-gen' element={<PDFGen />}>PDF Generator</Route>
        <Route path="/sign-up" element={<div><h2>Sign up page coming soon!</h2></div>}>Sign Up Page</Route>
      </Routes>
    </div>
  );
}

export default App;
