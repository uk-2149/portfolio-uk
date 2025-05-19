const ProfileCard = () => {
  return (
    <div
      className="rounded-2xl shadow-md p-6 w-full max-w-xs text-center"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
    >
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4"
          style={{ borderColor: "var(--color-accent-purple)" }}
        >
          <img src="" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Name */}
        <h2
          className="text-xl font-semibold"
          style={{ color: "var(--color-accent-purple)" }}
        >
          Utkal Kumar Das
        </h2>

        {/* Tagline */}
        <p
          className="text-sm mb-4"
          style={{ color: "var(--color-text-light)" }}
        >
          Full Stack Web Developer
        </p>

        {/* Buttons */}
        <div className="flex">
          <a
            href="/"
            download
            className="text-sm px-4 py-2 rounded-lg"
            style={{
              backgroundColor: "var(--color-accent-purple)",
              color: "var(--color-darkest)",
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
