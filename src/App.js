import React from 'react'
import Navbar from './Components/Navbar'
import './App.css';
import Home from './Components/Home';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App