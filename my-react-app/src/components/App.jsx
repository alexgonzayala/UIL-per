import React from 'react'
import Header from './Header';
import NavBar from './NavBar';
import Body from './Body';
import PDFGen from './PDF-generator';
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <Body />
      {/* <PDFGen /> */}
    </div>
  );
}

export default App;
