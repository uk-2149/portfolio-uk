import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

type Category = "Frontend" | "Backend" | "ML";

const TechStack = () => {
  const categories: Record<Category, string[]> = {
    Frontend: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Next.js",
    ],
    Backend: ["Node.js", "Express", "MongoDB", "Firebase", "Authentication"],
    ML: [
      "Python",
      "C++",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "Jupyter",
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<
    "Frontend" | "Backend" | "ML"
  >("Frontend");

  const isMobile = useIsMobile();

  const dataAosType = isMobile ? "fade-up" : "fade-left";

  return (
    <div
      className="rounded-xl shadow p-4"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos={dataAosType}
    >
      <h2 className="text-lg font-semibold mb-0">Tech Stack</h2>

      {/* Divider */}
      <div
        className="w-full h-[3px] rounded-md mt-1 mb-4"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>

      {/* Category */}
      <div className="flex flex-wrap gap-3 mb-6">
        {(Object.keys(categories) as Category[]).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1 text-sm rounded-lg font-medium border transition-colors duration-200 text-black ${
              selectedCategory === category
                ? "bg-[var(--color-accent-purple-bright)]"
                : "bg-white hover:bg-[var(--color-accent-purple-bright)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {categories[selectedCategory].map((skill: string, index: number) => (
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
