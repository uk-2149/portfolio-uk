import { useEffect, useState, useRef } from "react";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
// import HeroSection from "./components/HeroSection"
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Current from "./components/Current";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AOS from "aos";

import "aos/dist/aos.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const profileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (profileCardRef.current) {
        const profileCardTop =
          profileCardRef.current.getBoundingClientRect().top;
        // const windowHeight = window.innerHeight;
        const isPastProfileCard = profileCardTop < -10;
        setShowNavbar(isPastProfileCard);
      } else {
        console.log("ProfileCard ref not found");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1250,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen p-10">
      {showNavbar && <Navbar onContactClick={scrollToContact} />}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Profile */}
        <div className="w-full md:w-1/4 flex flex-col gap-6 justify-center h-fit">
          <div ref={profileCardRef}>
            <ProfileCard />
          </div>
          <About />
          <div className="hidden md:block">
            <Current />
          </div>
        </div>

        {/* Projects */}
        <div className="w-full md:w-2/4 md:pr-2">
          <Projects />
        </div>

        {/* Tech Stack and Contact */}
        <div className="w-full md:w-1/4 space-y-6">
          <TechStack />
          <div className="block md:hidden">
            <Current />
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
