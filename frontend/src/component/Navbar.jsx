import { IoSearchCircleOutline } from "react-icons/io5";
import logo from "../assets/Vastraafavicon.png";
import { FaCircleUser } from "react-icons/fa6";
import { TfiShoppingCart } from "react-icons/tfi";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext.jsx";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios";
import { IoMdHome } from "react-icons/io";
import { BiCollection } from "react-icons/bi";
import { MdContacts } from "react-icons/md";


function Navbar() {
  const { userData, getCurrentUser } = useContext(userDataContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate()
  const {serverUrl} = useContext(authDataContext)

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials: true})
      console.log(result.data);
      navigate("/login");

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="w-[100vw] h-[55px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
        <img src={logo} alt="Vastraa logo" className="w-[50px]" />
        <h1 className="text-[25px] text-black font-sans">Vastraa</h1>
      </div>

      <div className="w-[50%] lg:[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[5px] px-5 rounded-2xl">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[5px] px-5 rounded-2xl">
            COLLECTIONS
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[5px] px-5 rounded-2xl">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[5px] px-5 rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-5">
        {!showSearch && (
          <IoSearchCircleOutline
            className="w-[41px] h-[41px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-[41px] h-[41px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!userData && (
          <FaCircleUser
            className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}
        {userData && (
          <div
            className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full cursor-pointer flex items-center justify-center"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}

        <TfiShoppingCart className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block" />
        <p
          className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[6px] py-[2px] text-white
        rounded-full text-[10px] top-[10px] right-[23px]"
        >
          2
        </p>
      </div>

      {showSearch && (
        <div className="w-[100%] h-[65px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}

      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white">
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}

            {userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Logout
              </li>
            )}
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}

      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <IoMdHome className="w-[25px] h-[25px] text-white md:hidden" />
          Home
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <BiCollection className="w-[25px] h-[25px] text-white md:hidden" />
          Collections
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[25px] h-[25px] text-white md:hidden" />
          Contact
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <TfiShoppingCart className="w-[25px] h-[25px] text-white md:hidden" />
          Cart
        </button>
      </div>
    </div>
  );
}

export default Navbar;
