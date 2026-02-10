import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const navItems = ["Features", "Solutions", "Resources"];
  return (
    <header className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="flex items-center gap-44">
        <div className="font-bold text-xl">KanbanApp</div>

        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm cursor-pointer  border-none"
            >
              {item}
              <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
            </button>
          ))}
        </nav>
      </div>
      <div>
        <button className="px-4 py-2 text-sm cursor-pointer border-none bg-button">
          Login
        </button>
      </div>
    </header>
  );
};

export default LandingPage;
