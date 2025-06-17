const Current = () => {
  const updates = [
    { date: "12 June", activity: "Building testimonial.to clone" },
    { date: "26 May", activity: "Built a pdf-to-quiz converter" },
  ];

  return (
    <div
      className="rounded-xl shadow p-4"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <h2 className="text-lg font-semibold mb-0 border-b pb-1">
        Current Status
      </h2>

      {/* Divider */}
      <div
        className="w-full h-[3px] rounded-md mb-4"
        style={{ backgroundColor: "var(--color-accent-purple-bright)" }}
      ></div>

      <div className="space-y-2">
        {updates.map((update, index) => (
          <div key={index} className="flex items-start gap-2 flex-col">
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-accent-purple-bright)" }}
            >
              {update.date}:
            </span>
            <span className="text-sm">{update.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Current;
