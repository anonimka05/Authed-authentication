// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { verifyOtp } from "@/features/auth/authSlice";
// import { AppDispatch, RootState } from "@/store";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { UserIcon } from "@/icons/userIcon";
// import BgImg from "../assets/Bg.svg";
// import logo from "../assets/G.svg";

// export const VerifyOtp: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { isLoading, error, token } = useSelector(
//     (state: RootState) => state.auth
//   );

//   const [otp, setOtp] = useState("");
//   const email = location.state?.email || "";

//   useEffect(() => {
//     if (token) {
//       navigate("/dashboard");
//     }
//   }, [token, navigate]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otp || otp.length !== 6) {
//       alert("Please enter a valid 6-digit OTP");
//       return;
//     }

//     dispatch(verifyOtp({ email, otp }))
//       .unwrap()
//       .then(() => {
//         navigate("/dashboard");
//       })
//       .catch((error) => {
//         console.error("OTP verification error:", error);
//       });
//   };

//   return (
//     <div className="verify-otp flex items-center h-screen bg-white">
//       <div className="w-[440px] max-w-md ml-[140px]">
//         <div className="flex items-center justify-center mb-10 w-[60px] rounded-2xl h-[60px] bg-[#EEF2FF]">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-[26px] h-[26px] text-semibold"
//           />
//         </div>

//         <h2 className="text-2xl font-bold mb-3">Verify OTP</h2>
//         <p className="color-gray-300 opacity-60 text-[14px] mb-6">
//           Iltimos, emailingizga yuborilgan 6 xonali kodni kiriting.
//         </p>

//         <form className="relative" onSubmit={handleSubmit}>
//           <label htmlFor="otp" className="font-bold">
//             OTP parol
//           </label>
//           <Input
//             value={otp}
//             type="text"
//             placeholder="Enter OTP"
//             required
//             className="mb-5 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
//             onChange={(e) => setOtp(e.target.value)}
//           />
//             <label htmlFor="otp" className="font-bold">
//             OTP Code
//           </label>
//           <Input
//             value={otp}
//             type="text"
//             placeholder="Enter OTP"
//             required
//             className="mb-5 h-[60px] w-full bg-[#F3F4F6] focus:bg-[#E5E7EB]"
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <Button
//             type="submit"
//             className="w-full bg-[#4F46E5] h-[63px] text-white"
//             disabled={isLoading}
//           >
//             {isLoading ? "Tasdiqlanmoqda..." : "Verify OTP"}
//           </Button>
//           {error && <p className="text-red-500 mt-2">{error}</p>}
//         </form>
//       </div>

//       <div className="relative bg-gradient-to-b from-[#3730A3] to-[#312E81] w-1/2 h-screen !ml-[190px] flex flex-col justify-center items-center">
//         <img
//           src={BgImg}
//           alt="OTP Verification image"
//           className="w-[80%] h-screen mt-10"
//         />
//         <div className="absolute z-100 -mt-[230px]">
//           <UserIcon />
//         </div>
//         <div className="text-white text-left mb-38 w-[500px]">
//           <p className="text-lg text-semibold Inter opacity-70 mb-2 text-[12px]">
//             NAMANYAJUGABELAJAR.IO
//           </p>
//           <h2 className="z-10 text-2xl mb-4 w-[450px]">
//             Kodni kiriting va ro‘yxatdan o‘tish jarayonini yakunlang!
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };
