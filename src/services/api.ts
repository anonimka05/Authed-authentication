import axios from "axios";

// const url = import.meta.env.VITE_API_URL;

const API_URL = import.meta.env.VITE_API_URL;
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// export const authService = {
//   login: async (email: string, password: string) => {
//     try {
//       const response = await fetch(`${API_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Login response:", data);
//       return data;
//     } catch (error) {
//       console.error("Login error:", error);
//       throw error;
//     }
//   },
// };
