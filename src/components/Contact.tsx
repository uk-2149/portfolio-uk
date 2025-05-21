import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="rounded-xl shadow p-6"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <h2 className="text-xl font-semibold mb-1">Contact</h2>
      <div
        className="w-full h-[3px] rounded-md mb-5"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <Mail size={18} color="var(--color-accent-purple-bright)" />
          <a
            href="mailto:utkal2149@gmail.com"
            className="hover:underline text-[var(--color-text-white)]"
          >
            utkal2149@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin size={18} color="var(--color-accent-purple-bright)" />
          <a
            href="https://www.linkedin.com/in/utkal-kumar-das-785074289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[var(--color-text-white)]"
          >
            linkedin.com/in/utkal-kumar-das
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Github size={18} color="var(--color-accent-purple-bright)" />
          <a
            href="https://github.com/uk-2149"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[var(--color-text-white)]"
          >
            github.com/uk-2149
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Twitter size={18} color="var(--color-accent-purple-bright)" />
          <a
            href="https://x.com/uk_2149"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[var(--color-text-white)]"
          >
            x.com/uk-2149
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
