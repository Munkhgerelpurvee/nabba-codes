import styles from "./page.module.css";
import { Navbar } from "./components/Navbar";
import { Landig } from "./components/Landig";
import { About } from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-[1440px] items-center rounded-[20px] border-[5px] border-red-300 m-auto">
      <Navbar />
      <Landig />
      <About />


    </main>
  );
}
