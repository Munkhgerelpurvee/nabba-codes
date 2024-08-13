"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // hereglegch newtersen esehiig shalgaj bga state
  const [isChecking, setIsChecking] = useState(true);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: 0,
  });

  const createUser = async ({ email, name, password }) => {
    const response = await api.post("/auth/register", {
      email,
      name,
      password,
    });
  };
  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      toast.success(response.data.message);
      setIsLoggedIn(true);
      localStorage.setItem("token", "token");
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setIsLoggedIn(true);

    setIsChecking(false); // ene vildel duusaad is cheking false bolj bga<ToastContainer />
  }, []);

  useEffect(() => {
    if (isChecking) return; // is cheking baihiin bol yamar neg vildel hiihgvi shvv
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn, isChecking]); // cheking false bolsonii daraa l ajilna shvv

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, newUser, setNewUser, createUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
