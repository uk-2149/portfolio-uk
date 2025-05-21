import profileImage from "../assets/profile.jpg";

const ProfileCard = () => {
  return (
    <div
      className="rounded-2xl shadow-md p-6 w-full text-center"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos="fade-right"
    >
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4"
          style={{ borderColor: "var(--color-accent-purple)" }}
        >
          {/* <iframe src="https://drive.google.com/file/d/1uWUsUJr-IEPC-0iy0RaMkJwyjSYrGE_2/preview" className="w-full h-full object-cover pointer-events-none"></iframe> */}
          <img src={profileImage} alt="Profile" />
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
            // download
            onClick={() => {
              alert("will be available soon!");
            }}
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
