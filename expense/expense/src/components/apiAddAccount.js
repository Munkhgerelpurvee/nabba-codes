"use client";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FoodIcon } from "@/assets/foodIcon";
import { HomeIcon } from "@/assets/homeIcon";
import { AccountContext } from "./context";
import { AddHome } from "@/assets/addHome";
import { AddGift } from "@/assets/addGift";
import { AddFood } from "@/assets/addFood";
import { AddDrink } from "@/assets/addDrink";
import { AddTaxi } from "@/assets/addTaxi";
import { AddShopping } from "@/assets/addShopping";
import { Eye } from "@/assets/eye";
import * as Icons from "react-icons/fa";
import { CategoryContext } from "./categoryContext";

export const ApiAddAccount = ({ filterType, onTotalAmountChange }) => {
  // const [accounts, setAccounts] = useState([]);
  // const [selectedAccountId, setSelectedAccountId] = useState(null);
  // const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const {
    accounts,
    setAccounts,
    deleteAccount,
    selectedAccountId,
    setSelectedAccountId,
  } = useContext(AccountContext);
  const { selectedCategoryIds } = useContext(CategoryContext);

  const filteredAccounts = accounts
    .filter((account) => {
      if (filterType === "all") return true;
      return account.type === filterType;
    })
    .filter((account) => !selectedCategoryIds.includes(account.category?.id));
  // Calculate the total amount of filtered accounts
  const totalAmount = filteredAccounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );

  useEffect(() => {
    if (onTotalAmountChange) onTotalAmountChange(totalAmount);
  }, [totalAmount, onTotalAmountChange]);
  return (
    <div className="flex flex-col justify-center w-full">
      <button
        className="flex justify-end pr-[20px] items-center"
        onClick={deleteAccount}
        disabled={!selectedAccountId}
      >
        Delete
      </button>
      <div className="flex flex-col gap-5">
        {filteredAccounts?.map((account) => {
          const Icon = Icons[account.category?.icon];
          return (
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
                <Checkbox
                  height={6}
                  width={6}
                  className=" border"
                  key={account.id}
                  onCheck={() => setSelectedAccountId(account.id)}
                />
                <div className="w-8 h-8 flex justify-center items-center bg-teal-50 rounded-lg">
                  {Icon ? <Icon color={account.category?.color} /> : <Eye />}
                </div>
                <div>
                  <div>{account.category.title}</div>
                  {/* <div>{account.time}</div> */}
                  <div>{account.date}</div>
                </div>
              </div>
              <div
                className={`${
                  account.type === "inc" ? "text-[#23E01F]" : "text-[#F54949]"
                }`}
              >
                {account.type === "exp" ? -account.amount : account.amount}₮
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
