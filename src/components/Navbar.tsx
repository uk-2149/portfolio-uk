import profileImage from "../assets/profile.jpg";

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 shadow-md z-10 flex items-center justify-between px-4 py-3 md:hidden"
      style={{
        backgroundColor: "var(--color-darker)",
        color: "var(--color-text-white)",
      }}
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="flex items-center space-x-3">
        <img
          src={profileImage}
          alt="Utkal Profile"
          className="rounded-full w-10 h-10 border-2 border-accent-blue"
        />
        <h1 className="text-xl font-heading text-text-lighter">Utkal</h1>
      </div>
      <button
        onClick={onContactClick}
        className="text-sm px-4 py-2 rounded-lg"
        style={{
          backgroundColor: "var(--color-accent-purple)",
          color: "var(--color-darkest)",
        }}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
