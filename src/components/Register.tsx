import BgImg from "../assets/BgImg.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearError, registerUser } from "@/features/auth/authSlice";
import { AppDispatch, RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserIcon } from "@/icons/userIcon";
import logo from "../assets/G.svg";

export const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, error, token } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
    dispatch(clearError());
  }, [token, navigate, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(registerUser({ firstName, lastName, email, password }))
        .unwrap()
        .then(() => {
          navigate("/verify-otp", { state: { email } });
        })
        .catch((error) => {
          console.error("Registration error:", error);
        });
    }
  };

  const validateForm = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  return (
    <div className="register flex items-center h-screen bg-white">
      <div className="w-[440px] max-w-md ml-[140px]">
        <div className="flex items-center justify-center mb-10 w-[60px] rounded-2xl h-[60px] bg-[#EEF2FF]">
          <img
            src={logo}
            alt="Logo"
            className="w-[26px] h-[26px] text-semibold"
          />
        </div>

        <h2 className="text-2xl font-bold mb-3">Register</h2>
        <p className="color-gray-300 opacity-60 text-[14px] mb-6">
          Namanyajugabelajar.io da bepul o'rganing va embrionligingizdan beri
          orzu qilgan karyerangizni boshlang!
        </p>
        <form className="relative" onSubmit={handleSubmit}>
          <label htmlFor="name" className="font-bold">
            To`liq ism
          </label>
          <div className="flex items-center gap-5">
            <Input
              value={firstName}
              type="text"
              placeholder="Enter your name"
              required
              className="mb-3 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              value={lastName}
              type="text"
              required
              placeholder="Enter your last name"
              className="mb-3 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <label htmlFor="email" className="Inter font-bold text-[16px]">
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
          <label htmlFor="password" className="Inter font-bold text-[16px]">
            Password
          </label>
          <Input
            value={password}
            type="password"
            required
            placeholder="Enter your password"
            className="mb-5 h-[63px] bg-[#F3F4F6]"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 mt-2">{passwordError}</p>
          )}
          <p className="flex justify-center opacity-60 Inter text-[14px] mb-6">
            Roʻyxatdan oʻtish orqali siz Namanyajugabelajar.io'ning Foydalanish
            shartlari va Maxfiylik siyosatiga rozilik bildirasiz.
          </p>
          <Button
            type="submit"
            className="w-full bg-[#4F46E5] h-[63px] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Royxatdan o`tmoda..." : "Register"}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
      <div className="relative bg-gradient-to-b from-[#3730A3] to-[#312E81] w-1/2 h-screen !ml-[190px] flex flex-col justify-center items-center">
        <img
          src={BgImg}
          alt="Register image"
          className="w-[80%] h-screen mt-10"
        />
        <div className="absolute z-100 -mt-[230px]">
          <UserIcon />
        </div>
        <div className="text-white text-left mb-38 w-[500px]">
          <p className="text-lg text-semibold Inter opacity-70 mb-2 text-[12px]">
            NAMANYAJUGABELAJAR.IO
          </p>
          <h2 className="z-10 text-2xl mb-4 w-[450px]">
            Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter
            dan nggak jadi beban kayak si Denis!
          </h2>
        </div>
      </div>
    </div>
  );
};
