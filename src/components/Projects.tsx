const Projects = () => {
  const projects = [
    {
      title: "QuizGen",
      description:
        "A file-to-quiz generator that converts uploaded documents into customizable quizes, supporting different difficulty levels and question types.",
      tech: ["React", "Firebase", "Gemini API", "Express"],
      github: "https://github.com/uk-2149/pdf-quiz",
      live: "https://quizgen-xi.vercel.app/",
    },
    {
      title: "Disaster Aid",
      description:
        "A platform to collect disaster aid requests using voice transcription and real-time Firestore updates.",
      tech: ["React", "Firebase", "Twilio", "Express"],
      github: "https://github.com/uk-2149/disaster-aid",
      live: "",
    },
    {
      title: "Attendance Tracker",
      description:
        "A platform to manage attendance, so that you don't have to be in doubt whether you should miss the next class or not.",
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
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-shadow h-fit"
            style={{
              backgroundColor: "var(--color-darker)",
              borderColor: "var(--color-darkest)",
              color: "var(--color-text-light)",
            }}
            data-aos="fade-up"
            data-aos-delay={idx === 0 ? 0 : idx * 200}
            data-aos-easing="ease-out-cubic"
          >
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--color-accent-purple-bright)" }}
            >
              {project.title}
            </h3>

            <p className="my-2" style={{ color: "var(--color-text-light)" }}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--color-darkest)",
                    color: "var(--color-text-white)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:underline"
                style={{ color: "var(--color-accent-purple)" }}
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "var(--color-accent-purple)" }}
                >
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
