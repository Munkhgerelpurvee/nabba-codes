"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FoodIcon } from "@/assets/foodIcon";
import { HomeIcon } from "@/assets/homeIcon";

export const ApiAddAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/accounts");
      setAccounts(response.data);
    };
    getData();
  }, []);

  const createAccount = async () => {
    const newAccount = { title, amount, time, date };
    const response = await axios.post(
      "http://localhost:3001/accounts",
      newAccount
    );
    setAccounts([...accounts, response.data]);
    setTitle("");
    setAmount("");
    setTime("");
    setDate("");
  };

  const deleteAccount = async () => {
    if (selectedAccountId) {
      await axios.delete(`http://localhost:3001/accounts/${selectedAccountId}`);
      setAccounts(
        accounts.filter((account) => account.id !== selectedAccountId)
      );
      setSelectedAccountId(null); // Clear selection after deletion
    }
  };
  return (
    <div className="flex flex-col justify-center w-full">
      {accounts.map((account) => (
        <div
          className="flex justify-between bg-white items-center px-6 py-3 rounded-lg"
          key={account.id}
          onClick={() => setSelectedAccountId(account.id)}
          style={{
            cursor: "pointer",
            backgroundColor:
              selectedAccountId === account.id ? "#f0f0f0" : "white",
          }}
        >
          <div className="flex gap-4 items-center">
            <Checkbox height={6} width={6} className=" border" />
            <div>
              {account.title === "Food & Drinks" ? <FoodIcon /> : <HomeIcon />}
            </div>
            <div>
              <div>{account.category.name}</div>
              <div>{account.time}</div>
              <div>{account.date}</div>
            </div>
          </div>
          <div
            className={`${
              account.amount > 0 ? "text-[#23E01F]" : "text-[#F54949]"
            }`}
          >
            {account.amount}₮
          </div>
        </div>
      ))}

      {/* <div>
        <div className="flex gap-4">
          <input
            className="border"
            value={title}
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            className="border"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <input
            className="border"
            placeholder="Time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
          <input
            className="border"
            placeholder="Date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <button onClick={createAccount}>Create</button>
          <button onClick={deleteAccount} disabled={!selectedAccountId}>
            Delete
          </button>
        </div>
      </div> */}
    </div>
  );
};
