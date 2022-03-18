import React from 'react';
import logo from './logo.svg';

import './App.css';

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="App">
      <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
