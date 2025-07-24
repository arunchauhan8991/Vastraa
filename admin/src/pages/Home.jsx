import React from 'react'
import Navbar from "../component/Navbar.jsx"
import Sidebar from "../component/Sidebar.jsx"

function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] relative ">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Home