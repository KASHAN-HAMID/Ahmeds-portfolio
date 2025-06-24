
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
      </div>
    </div>
  );
};

export default Index;
