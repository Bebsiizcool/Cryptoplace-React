import React from 'react'
import Nav from './components/Navbar/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Coin from './pages/coin/Coin'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
