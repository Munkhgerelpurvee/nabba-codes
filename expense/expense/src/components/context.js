"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AccountContext = createContext(null);
export const AccountContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const getAccounts = async () => {
    const response = await axios.get("http://localhost:3001/accounts");
    setAccounts(response.data);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const [newTransaction, setNewTransaction] = useState({
    type: "exp",
    amount: 0,
    category: { name: "", img: "", color: "" },
    note: "",
    date: "",
    time: "",
  });

  return (
    <AccountContext.Provider
      value={{
        newTransaction,
        setNewTransaction,
        accounts,
        getAccounts,
        setAccounts,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
