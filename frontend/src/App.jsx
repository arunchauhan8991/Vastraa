import React, { useContext } from 'react'
import Registration from './pages/Registration.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Navbar from "./component/Navbar.jsx"
import { userDataContext } from './context/UserContext.jsx'

function App() {

  let{userData} = useContext(userDataContext)

  return (
    <>
    {userData && <Navbar />}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App