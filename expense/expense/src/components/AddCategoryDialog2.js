"use client";

import { Plus } from "@/assets/plus";
import { useState, useEffect, useContext } from "react";
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import { AddHome } from "@/assets/addHome";
import { AddCategoryIconMap } from "./AddCategoryIconMap";
import axios, { Axios } from "axios";
import { CategoryContext } from "./categoryContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const AddCategoryDialog2 = () => {
  const {
    newCategory,
    SetNewCategory,
    categories,
    setCategories,
    deleteCategory,
    getCategories,
    selectedCategoryIds,
    setSelectedCategoryIds,
    handleCategoryClick,
  } = useContext(CategoryContext);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:3001/categories");
      setCategories(response.data);
    };
  }, []);
  const createCategory = async () => {
    // const newCategory = { title };
    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory
    );
    getCategories();
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="text-[16px] font-semibold">Category</div>
        <button
          className="text-[#1F2937] text-base opacity-20"
          onClick={deleteCategory}
        >
          clear
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <div
            className="flex justify-between"
            onClick={() => handleCategoryClick(category.id)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedCategoryIds.includes(category.id)
                ? "lightblue"
                : "white",
            }}
            key={category.id}
          >
            <div className="flex gap-2">
              <div className="flex items-center">
                {selectedCategoryIds.includes(category.id) ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </div>
              <div>{category.title}</div>
            </div>
            <div>
              <RDirect />
            </div>
          </div>
        ))}
      </div>
      <Dialog>
        <DialogTrigger>
          <div>
            <div className="flex items-center gap-2">
              <BluePlus /> Add Category
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className=" flex flex-col bg-white gap-[20px]">
            <div className="flex  pb-[20px] border-b-[1px] border-slate-400">
              <div className="text-[20px] font-semibold">Add Category</div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex-1">
                <AddCategoryIconMap />
              </div>
              <div className="flex-[3]">
                <input
                  placeholder="Name"
                  onChange={(event) =>
                    SetNewCategory({
                      ...newCategory,
                      title: event.target.value,
                    })
                  }
                  className="bg-[#F9FAFB] text-[#D1D5DB] w-[100%] h-12 rounded-lg pl-4"
                ></input>
              </div>
            </div>
            <DialogClose>
              <button
                onClick={createCategory}
                className="text-white bg-[#16A34A] w-full rounded-3xl flex justify-center items-center py-[8px]"
              >
                Add Category
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
