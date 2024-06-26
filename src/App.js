import './App.css';
import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import AboutPage from './pages/About';
import ContactUsPage from './pages/ContactUs';
import ImageUpload from './Components/ImageUpload';
import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './pages/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the time as needed
  }, []);
  return (
    
    <div className="App">
      {isLoading ? <Loading/> : 
      <>
      <Routes>
      <Route path="/dpd/" element={<Home/>}/>
      <Route path="/dpd/Diagnose-Treat" element={<ImageUpload/>}/>
      <Route path="/dpd/About" element={<AboutPage/>}/>
      <Route path="/dpd/Contact-us" element={<ContactUsPage/>}/>
    </Routes>
      <div style={{position:"fixed",width:"100%",top:0,zIndex:5} }>
      <Navbar/>
      </div>
      </>
      }
      
    </div>
  );
}

export default App;
