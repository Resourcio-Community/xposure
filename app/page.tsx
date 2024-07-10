import Home from "@/components/Home";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}
