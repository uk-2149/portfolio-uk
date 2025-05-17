import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="h-[100vh] flex items-center pt-32 md:pt-40 pb-16 md:pb-24 px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <p className="text-accent-blue font-mono mb-5">Hi, my name is</p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-lighter mb-4">
            Utkal.
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent-blue mb-6">
          I{' '}
  <span className="text-accent-blue">
    <Typewriter
      words={[
        'build things for the web.',
        'am exploring AI to build meaningful tools.',
        'love turning ideas into working code.',
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
    </span>
          </h2>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          <p className="text-text-light max-w-xl text-lg mb-12">
            I'm a B.Tech IT student specializing in full-stack development with the MERN stack.
            Currently exploring the fascinating world of data science and machine learning
            to build more intelligent and impactful applications.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <a
            href="#projects"
            className="btn-primary inline-flex items-center"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
