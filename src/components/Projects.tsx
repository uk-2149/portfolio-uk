const Projects = () => {
  const projects = [
    {
      title: "Disaster Aid Platform",
      description:
        "A React + Firebase platform to collect disaster aid requests using voice transcription and real-time Firestore updates.",
      tech: ["React", "Firebase", "Twilio", "Express"],
      github: "https://github.com/yourname/project1",
      live: "https://yourproject1.netlify.app",
    },
    {
      title: "Attendance Tracker",
      description:
        "A Student Attendance tracker to manage attendance, so that you don't have to be in doubt whether you should miss the next class or not.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourname/project2",
      live: "https://yourproject2.vercel.app",
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
            className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-shadow"
            style={{
              backgroundColor: "var(--color-darker)",
              borderColor: "var(--color-darkest)",
              color: "var(--color-text-light)",
            }}
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
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:underline"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
