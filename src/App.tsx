import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
// import HeroSection from "./components/HeroSection"
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Profile */}
        <div className="w-full md:w-1/4 flex justify-center h-fit">
          <ProfileCard />
        </div>

        {/* Projects */}
        <div className="w-full md:w-2/4 md:pr-2">
          <Projects />
        </div>

        {/* Tech Stack and Contact */}
        <div className="w-full md:w-1/4 space-y-6">
          <TechStack />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
