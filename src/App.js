import './App.css';
import React from 'react';
// import Profile from './PortfolioContainer/Home/Profile';
// import Footer from './PortfolioContainer/Home/Footer';
import Home from './PortfolioContainer/Home/Home';
import Contact from './PortfolioContainer/CotactMe/Conatct';
import About from './PortfolioContainer/AboutMe/About';

function App() {
  return (
    <div className="App">
      {/* <Profile />
      <Footer /> */}
      <Home />
      <About />
      <Contact />
    </div>

  );
}

export default App;
