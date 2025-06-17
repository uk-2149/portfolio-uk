import { Github, ExternalLink } from "lucide-react";
import QuizGen from "../assets/QuizGen.png";
import atTrack from "../assets/atTrack.png";
import disaster from "../assets/disaster.png";
import testimonial from "../assets/testimonial.png"

const Projects = () => {
  const projects = [
    {
      title: "Testimonial",
      description:
        "Inspired by testimonial.to, a project where users can create review widgets for their projects. They can collect testimonials via shareable links and embed them on their website with a single script tag. Includes live customization and real-time preview.",
      image: testimonial,
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/uk-2149/testimonial-clone",
      live: "https://testimonial-uk-97.vercel.app/"
    }, 
    {
      title: "QuizGen",
      description:
        "A file-to-quiz generator that converts uploaded documents into customizable quizes, supporting different difficulty levels and question types.",
      image: QuizGen,
      tech: ["React", "Firebase", "Gemini API", "Express"],
      github: "https://github.com/uk-2149/pdf-quiz",
      live: "https://quizgen-xi.vercel.app/",
    },
    {
      title: "Disaster Aid",
      description:
        "A platform to collect disaster aid requests using voice transcription and real-time Firestore updates.",
      image: disaster,
      tech: ["React", "Firebase", "Twilio", "Express"],
      github: "https://github.com/uk-2149/disaster-aid",
      live: "",
    },
    {
      title: "Attendance Tracker",
      description:
        "A platform to manage attendance, so that you don't have to be in doubt whether you should miss the next class or not.",
        image: atTrack,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/uk-2149/attendance-tracker",
      live: "https://attendance-tracker-umfa.vercel.app/",
    },
  ];

  return (
    <div className="w-full">
      {/* Heading */}
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ color: "var(--color-accent-purple)" }}
      >
        Projects
      </h2>

      {/* Divider */}
      <div
        className="w-full h-1 rounded-lg mb-6"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>

      {/* Project Cards */}
      <div className="space-y-8">
  {projects.map((project, idx) => (
    <div
      key={idx}
      className="relative rounded-xl shadow-md p-3 md:p-6 transition-all duration-300 hover:shadow-[0_0_15px_var(--color-accent-purple)]"
      style={{
        backgroundColor: "var(--color-darker)",
        borderColor: "var(--color-darkest)",
        color: "var(--color-text-light)",
      }}
      data-aos="fade-up"
      data-aos-delay={idx * 150}
      data-aos-easing="ease-out-cubic"
    >
      {/* Project Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full object-cover transition-transform duration-300"
          loading="lazy"
        />

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-85 transition-opacity duration-300"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink
              size={32}
              className="text-white"
              style={{ color: "var(--color-accent-purple)" }}
            />
          </a>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-bold mb-3"
        style={{ color: "var(--color-accent-purple-bright)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: "var(--color-text-light)" }}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs md:text-sm px-3 py-1 rounded-full border border-opacity-50 transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-darkest)",
              color: "var(--color-text-white)",
              borderColor: "var(--color-accent-purple)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-sm md:text-base hover:underline focus:outline-none focus:ring-2 focus:ring-accent-purple rounded"
          style={{ color: "var(--color-accent-purple)" }}
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github size={18} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm md:text-base hover:underline focus:outline-none focus:ring-2 focus:ring-accent-purple rounded"
            style={{ color: "var(--color-accent-purple)" }}
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Projects;
