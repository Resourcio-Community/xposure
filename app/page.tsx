import Image from "next/image";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <div className="bg-background_black w-full min-h-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}
