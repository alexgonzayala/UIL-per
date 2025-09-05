import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header';
import NavBar from './NavBar';
import Body from './Body';
// import PDFGen from './PDF-generator';
import ContactUs from './Contact-us';
import AboutUs from './About-us';
import NumberSense from './Number-sense';
import GeneralMath from './General-math';
import './App.css'

function App() {

  return (
    <div>
      
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/about-us" element={<AboutUs />}>About Us</Route>
          <Route path="/number-sense" element={<NumberSense/>}>Number Sense</Route>
          <Route path="/general-math" element={<GeneralMath />}>General Math</Route>
          <Route path="/contact-us" element={<ContactUs />}>Contact Us</Route>
        </Routes>
      </BrowserRouter>
      <Body />
      
      {/* <PDFGen /> */}
    </div>
  );
}

export default App;
