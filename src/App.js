import React from 'react'
import Navbar from './Components/Navbar'
import './App.css';
import Home from './Components/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App