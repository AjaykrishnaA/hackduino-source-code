import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Info from './Components/Info';
//import Partners from './Components/Partners';
//import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Banner />
      <Info />
      <Footer/>
    </div>
  );
}

export default App;
