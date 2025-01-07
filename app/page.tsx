import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DisplayContainer from "./Components/DisplayContainer";
import Services from "./Components/Services";
import VipSignup from "./Components/VipSignup";
import Footer from "./Components/Footer"; // New Footer Component

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-b from-black via-red-500 to-black">
        <Hero />
      </div>

      {/* Display Container */}
      <div className="w-11/12 max-w-7xl mx-auto pt-16 pb-16">
        <DisplayContainer />
      </div>

      {/* Services Section */}
      <div className="w-11/12 max-w-7xl mx-auto pt-16 pb-16">
        <Services />
      </div>

      {/* VIP Signup Section - Add the id attribute here */}
      <div className="w-11/12 max-w-7xl mx-auto pt-16 pb-16">
        <VipSignup />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
