"use client";

import { createContext, useState } from "react";

export const AccountContext = createContext(null);
export const AccountContextProvider = ({ children }) => {
  const [newTransaction, setNewTransaction] = useState({
    type: "exp",
    amount: 0,
    category: { name: "", img: "", color: "" },
    note: "",
  });

  return (
    <AccountContext.Provider value={{ newTransaction, setNewTransaction }}>
      {children}
    </AccountContext.Provider>
  );
};
