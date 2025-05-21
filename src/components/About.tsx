const About = () => {
  return (
    <div
      className="rounded-xl shadow p-4"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <h2 className="text-lg font-semibold mb-0 border-b pb-1">About Me</h2>

      {/* Divider */}
      <div
        className="w-full h-[3px] rounded-md mb-4"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>

      <p className="text-sm leading-relaxed space-y-2 italic">
        I make things for the web
      </p>
    </div>
  );
};

export default About;
