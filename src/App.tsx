import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
