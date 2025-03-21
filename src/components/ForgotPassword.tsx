import { useState } from "react";
import logo from "../assets/G.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { BlockIcon } from "@/icons/Block";
import BgImg from "../assets/BgImg.svg";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { forgotPassword } from "@/features/auth/authSlice";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(forgotPassword({ email }))
      .unwrap()
      .then(() => {
        toast.success("Verification code sent to your email!");
        navigate("/verify-otp", { state: { email } });
      })
      .catch((error) => {
        console.error("Forgot Password error:", error);
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container flex items-center h-screen bg-white">
      <div className="w-[440px] max-w-md ml-[140px]">
        <div className="flex items-center justify-center mb-10 w-[60px] rounded-2xl h-[60px] bg-[#EEF2FF]">
          <img src={logo} alt="Logo" className="w-[26px] h-[26px]" />
        </div>

        <h2 className="text-2xl font-bold mb-3">Parolni unutdingizmi?</h2>
        <p className="text-gray-600 text-sm mb-6">
          Oldin ro‘yxatdan o‘tgan emailingizni kiriting, keyin sizning
          emailingizga kod yuboriladi.
        </p>

        <form className="relative" onSubmit={handleForgotPasswordSubmit}>
          <label htmlFor="email" className="font-bold text-[16px]">
            Email
          </label>
          <Input
            id="email"
            value={email}
            type="email"
            required
            placeholder="Emailingizni kiriting"
            className="mb-3 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-[#4F46E5] h-[63px] text-white cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Yuborilmoqda..." : "Davom etish"}
            <ToastContainer />
          </Button>
        </form>

        <p
          className="flex justify-center opacity-70 cursor-pointer font-bold text-[14px] mt-10"
          onClick={() => navigate("/login")}
        >
          Parolingizni esladingizmi?
          <span className="text-[#4F46E5] opacity-100 ml-1">Login!</span>
        </p>
      </div>

      <div className="relative bg-gradient-to-b from-[#3730A3] to-[#312E81] w-1/2 h-screen ml-[190px] flex flex-col justify-center items-center">
        <img src={BgImg} alt="Register" className="w-[80%] h-screen mt-10" />
        <div className="absolute -mt-[230px]">
          <BlockIcon />
        </div>
        <div className="text-white text-left w-[500px]">
          <p className="text-lg font-semibold opacity-70 mb-2 text-[12px]">
            NAMANYAJUGABELAJAR.IO
          </p>
          <h2 className="text-2xl mb-4 w-[450px]">
            Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa
            sama jasa para pahlawan.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
