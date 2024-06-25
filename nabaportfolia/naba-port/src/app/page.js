import styles from "./page.module.css";
import { Navbar } from "../components/Navbar";
import { Landig } from "../components/Landig";
import { About } from "../components/About";
import { Part4 } from "../components/Part4";
import { Part5 } from "../components/Part5";
import { Part6 } from "../components/Part6";
import { Part7 } from "../components/Part7";
import { Part8 } from "../components/Part8";


export default function Home() {
  return (
    <main className="flex flex-col w-[1440px] items-center m-auto">
      <Navbar />
      <Landig />
      <About />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8 />



    </main>
  );
}
