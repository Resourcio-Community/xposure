import Home from "@/components/Home/Home";
import About from "@/components/Home/About";

export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Home />
      <About />
    </div>
  );
}
