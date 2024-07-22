import { Header } from "@/components/header";
import { Records } from "@/components/records";


export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="bg-gray-100"><Records/></div>
     
    </main>
  );
}
