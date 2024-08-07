"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AccountContext = createContext(null);

export const AccountContextProvider = ({ children }) => {
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const getAccounts = async () => {
    const response = await axios.get("http://localhost:3001/accounts");
    setAccounts(response.data);
  };
  const deleteAccount = async () => {
    if (selectedAccountId) {
      await axios.delete(`http://localhost:3001/accounts/${selectedAccountId}`);
      setAccounts(
        accounts?.filter((account) => account.id !== selectedAccountId)
      );
      setSelectedAccountId(null); // Clear selection after deletion
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const [newTransaction, setNewTransaction] = useState({
    type: "exp",
    amount: 0,
    category: { name: "", title: "", color: "" },
    payee: "",
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
        deleteAccount,
        selectedAccountId,
        setSelectedAccountId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
