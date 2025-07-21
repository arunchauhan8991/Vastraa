import Logo from "../assets/Vastraafavicon.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [showEye, setShowEye] = useState(false);

  return (
    <div
      className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white 
    flex flex-col items-center justify-start"
    >
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
        <img
          className="w-[40px]"
          src={Logo}
          alt="Vastraa logo"
          onClick={() => navigate("/")}
        />
        <h1 className="text-[22px] font-sans " onClick={() => navigate("/")}>
          Vastraa
        </h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-4">Welcome to Vastraa, Place your order</span>
      </div>
      <div
        className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] 
      backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center"
      >
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[10px]">
            <img src={google} alt="google logo" className="w-[20px]" />
            Registration with Google
          </div>
          <div className="w-[100%] h-5 flex items-center justify-center gap-2.5">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="text"
              className="w-[100%] h-[50px] border-0.5 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent 
            placeholder-[#ffffffc7] px-5 font-semibold"
              placeholder="Email"
              required
            />
            <input
              type={showEye ? "text" : "password"}
              className="w-[100%] h-[50px] border-0.5 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent 
            placeholder-[#ffffffc7] px-5 font-semibold"
              placeholder="Password"
              required
            />
            {!showEye && (
              <IoEyeOffOutline
                className="w-5 h-5 cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setShowEye((prev) => !prev)}
              />
            )}
            {showEye && (
              <IoEyeOutline
                className="w-5 h-5 cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setShowEye((prev) => !prev)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold">
              Create Account
            </button>
            <p className="flex gap-[10px]">
              Don't have an account?
              <span
                className="text-[#5555f6c5] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create New Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
