"use client";

import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext(null);
export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const createCategory = async () => {
    // const newCategory = { title };
    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory
    );

    // setCategories([...categories, response.data]);
    // setTitle("");
  };
  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/categories");
    setCategories(response.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const deleteCategory = async () => {
    if (selectedCategoryId) {
      await axios.delete(
        `http://localhost:3001/categories/${selectedCategoryId}`
      );
      setCategories(
        categories.filter((category) => category.id !== selectedCategoryId)
      );
      setSelectedCategoryId(null); // Clear selection after deletion
    }
  };
  const [newCategory, SetNewCategory] = useState({
    title: "",
    icon: "",
    color: "",
  });
  return (
    <CategoryContext.Provider
      value={{
        newCategory,
        SetNewCategory,
        categories,
        createCategory,
        getCategories,
        deleteCategory,
        setSelectedCategoryId,
        selectedCategoryId,
        setCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
