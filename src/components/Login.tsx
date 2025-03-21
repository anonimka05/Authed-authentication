import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "../assets/G.svg";
import LoginImg from "../assets/LoginImg.svg";
import { AppDispatch, RootState } from "@/store";
import { loginUser } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Login succesfully!");
      })

      .catch((error) => {
        console.error("Login error details:", error);
        toast.error(error);
      });
  };

  const handleClick = () => {
    navigate("/register");
  };

  const handleForgotClick = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="login-container flex  items-center  h-screen  bg-white">
      <div className="w-[440px] max-w-md ml-[140px]">
        <div className="flex items-center justify-center mb-10 w-[60px] rounded-2xl h-[60px] bg-[#EEF2FF]">
          <img
            src={logo}
            alt="Logo"
            className="w-[26px] h-[26px] text-semibold"
          />
        </div>

        <h2 className="text-2xl font-bold mb-3">Login</h2>
        <p className="color-gray-300 opacity-60 text-[14px] mb-6">
          Namanyajugabelajar.io da bepul o'rganing va embrionligingizdan beri
          orzu qilgan karyerangizni boshlang!
        </p>
        <form className="relative" onSubmit={handleSubmit}>
          <label htmlFor="text" className="Inter font-bold text-[16px]">
            Email
          </label>
          <Input
            value={email}
            type="email"
            required
            placeholder="Enter your email"
            className="mb-3 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="text" className="Inter font-bold text-[16px]   ">
            Password
          </label>
          <label
            htmlFor="text"
            className="ml-50 text-[14px] font-bold text-[#4F46E5] cursor-pointer"
            onClick={handleForgotClick}
          >
            Parolni unutdingizmi?
          </label>
          <Input
            value={password}
            type="password"
            required
            placeholder="Enter your password"
            className="mb-4 h-[60px] bg-[#F3F4F6]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-4 ">
            <input type="checkbox" className="" />
            <p className="font-bold ml-2">Saqlansin</p>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#4F46E5] h-[63px] text-white cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Kirish..." : "Login"}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
          <ToastContainer />
          <p
            className="flex justify-center opacity-70 cursor-pointer Inter font-bold text-[14px] mt-10"
            onClick={handleClick}
          >
            Hisobingiz yo'qmi?
            <span className="text-[#4F46E5] opacity-100">
              Hozir ro`yxatdan o`ting, bepul!
            </span>
          </p>
        </form>
      </div>
      <div className="bg-gradient-to-b from-[#3730A3] to-[#312E81] w-1/2 h-screen !ml-[190px] flex flex-col justify-center items-center">
        <img
          src={LoginImg}
          alt="Login image"
          className="w-[80%] h-screen relative "
        />
        <div className=" text-white text-left  mb-38 w-[500px]">
          <p className="text-lg text-semibold opacity-70  text-[12px]">
            NAMANYAJUGABELAJAR.IO
          </p>
          <h2 className="text-2xl mt-5">
            Belajar secara online semakin mudah – tetep belajar walaupun pake
            kuota dari Kemendikbud hehe~
          </h2>
        </div>
      </div>
    </div>
  );
};
