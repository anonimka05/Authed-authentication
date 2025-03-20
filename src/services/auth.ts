import { api } from "./api";

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post("/api/auth/login", { email, password });
      console.log("Login Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  },

  register: async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const response = await api.post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  },
  verifyOtp: async (email: string, otp: string) => {
    const response = await api.post("/auth/verify-otp", { email, otp });
    return response.data;
  },
  forgotPassword: async (email: string) => {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },
  resetPassword: async (token: string, password: string) => {
    const response = await api.post("/auth/reset-password", {
      token,
      password,
    });
    return response.data;
  },
};
