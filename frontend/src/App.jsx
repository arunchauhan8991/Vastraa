import React from 'react'
import Registration from './pages/Registration.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Navbar from "./component/Navbar.jsx"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App