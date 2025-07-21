import React from 'react'
import Registration from './pages/Registration.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App