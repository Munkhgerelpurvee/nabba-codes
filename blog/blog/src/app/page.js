"use client";

import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Part1 } from "./component/Part1";
import { Part2 } from "./component/Part2";

import { useEffect, useState } from "react";
import { Part3 } from "./component/Part3";
import { AllBlogs } from "./component/AllBlog";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const articles = await res.json();
  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArticle();
      setArticles(data);
    };

    getData();
  }, []);

  return (
    <main className="flex flex-col m-auto bg-white  w-full">
      <Header />
      <Part1 data={articles} />
      <Part2 data={articles} />
      <Part3 data={articles} />
      <AllBlogs />
      <Footer />
    </main>
  );
}
