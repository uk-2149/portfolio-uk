const TechStack = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
  ];

  return (
    <div
      className="rounded-xl shadow p-4"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
    >
      <h2 className="text-lg font-semibold mb-0 border-b pb-1">Tech Stack</h2>

      {/* Divider */}
      <div
        className="w-full h-[3px] rounded-md mb-6"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full border"
            style={{
              backgroundColor: "var(--color-darkest)",
              color: "var(--color-text-white)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
