import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Vastraafavicon.png"
import axios from "axios"
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';

function Navbar() {

    const navigate = useNavigate()
    const {serverUrl} = useContext(authDataContext)
    const {getAdmin} = useContext(adminDataContext)

    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials: true})
            console.log(result.data);
            getAdmin()
            navigate("/login")
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className="w-[100vw] h-[55px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between overflow-x-hidden px-[30px] shadow-md shadow-black">
      <div
        className="w-[30%] cursor-pointer flex items-center justify-start gap-[10px]"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="Vastraa logo" className="w-[30px]  " />
        <h1 className="text-[25px] text-black font-sans ">Vastraa</h1>
      </div>
      <button 
      className="text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white "
      onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar