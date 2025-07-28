import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Sidebar from '../component/Sidebar.jsx'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'

function Lists() {

  const [list, setList] = useState([])
  const {serverUrl} = useContext(authDataContext)

  const fetchList = async () => {
    try {
      const result = await axios.post(serverUrl + "/api/product/list")
    } catch (error) {
      
    }
  }

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white '>
      <Navbar />
      <div className='w-[100%] h-[100%] flex items-center justify-start '>
        <Sidebar />
        <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden
        py-[50px] ml-[100px] '>
          <div className='w-[400px] h-[50px]  text-[28px] md:text-[40px] mb-[20px] text-white '>
            All Listed Products
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists