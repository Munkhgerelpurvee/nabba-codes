"use client";

import { Plus } from "@/assets/plus";
import { Eye } from "@/assets/eye";
import { RDirect } from "@/assets/rdirect";
import { BluePlus } from "@/assets/blueplus";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AddIcon } from "@/assets/addIcon";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@/assets/homeIcon";
import { FoodIcon } from "@/assets/foodIcon";
import { RecordsCard } from "./RecordsCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddCategory } from "./addCategory";
import { AccountContext } from "./context";

const data = [
  { title: "Food & Drinks" },
  { title: "Shopping" },
  { title: "Housing" },
  { title: "Transportation" },
  { title: "Vehicle" },
  { title: "Life & Entertainment" },
  { title: "Communication, PC" },
  { title: "Financial expenses" },
  { title: "Investments" },
  { title: "Income" },
  { title: "Others" },
];
const data1 = [
  {
    title: "Lending & Renting",
    date: "14:00",
    amount: -1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: 1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: -1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: 1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: -1000,
  },
];

export const AddComponent = () => {
  const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [activeButton, setActiveButton] = useState("expense");
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const createAccount = async () => {
    // const newAccount = { title, amount, time, date };

    const response = await axios.post(
      "http://localhost:3001/accounts",
      newTransaction
    );
    setAccounts([...accounts, response.data]);
    setTitle("");
    setAmount("");
    setTime("");
    setDate("");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <div className="flex items-center justify-center gap-[8px] w-[250px] bg-[#0166FF] text-[16px]  text-[#FFFFFF] rounded-3xl py-2 ">
            <Plus /> Add
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className=" flex flex-col bg-white gap-[20px]">
          <div className="flex  pb-[20px] border-b-[1px] border-slate-400">
            <div className="text-[20px] font-semibold">Add Record</div>
          </div>
          <div className="flex gap-[16px] ">
            <div className="flex-1 flex flex-col gap-4 ">
              <div className="flex relative">
                <div
                  className={`py-2 px-14 rounded-3xl z-10 transition-colors ${
                    activeButton === "expense"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 rounded-r-none"
                  }`}
                  onClick={() => handleButtonClick("expense")}
                >
                  Expense
                </div>
                <div
                  className={`py-2 px-14 absolute top-0 left-40 rounded-r-3xl transition-colors ${
                    activeButton === "income"
                      ? "bg-green-600 text-white z-10 rounded-l-3xl"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleButtonClick("income")}
                >
                  Income
                </div>
              </div>
              <div className="border px-[16px] py-[12px] rounded-lg">
                <div>Amount</div>
                <div>
                  <input
                    placeholder="₮ 000.00"
                    value={newTransaction.value}
                    onChange={(event) =>
                      setNewTransaction({
                        ...newTransaction,
                        amount: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div>Category</div>
                <div>
                  <AddCategory />
                </div>
              </div>
              <div className=" flex gap-6">
                <div>
                  <div>Date</div>
                  <div>
                    <input
                      type="date"
                      placeholder="Date"
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div>Time</div>
                  <div>
                    <input
                      type="time"
                      placeholder="Time"
                      value={time}
                      onChange={(event) => setTime(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`text-white bg-[#0166FF] rounded-3xl flex justify-center items-center py-[8px] ${
                  activeButton === "income"
                    ? "bg-green-600 text-white z-10 rounded-l-3xl"
                    : "bg-[#0166FF]"
                }`}
              >
                <DialogClose>
                  <button type="submit" onClick={createAccount}>
                    Add Record
                  </button>
                </DialogClose>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <div>Payee</div>
                <div>
                  <Input />
                </div>
              </div>
              <div>
                <div>Note</div>
                <div>
                  <Textarea />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
