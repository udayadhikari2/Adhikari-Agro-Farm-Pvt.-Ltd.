import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Cards from './components/cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Body/>
      <Cards/>
      <Footer/>
    </Router>
  );
}

export default App;
