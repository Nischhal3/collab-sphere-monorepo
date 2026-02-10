import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";

const LandingPage = () => {
  const navItems = ["Features", "Solutions", "Resources"];
  return (
    <header className="flex justify-between items-center p-2 border-b border-gray">
      <div className="flex items-center gap-44">
        <div className="font-bold text-xl text-black">KanbanApp</div>
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-base cursor-pointer border-none text-black"
            >
              {item}
              <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
            </button>
          ))}
        </nav>
      </div>
      <Button label="Login" size="medium" borderColor="border-gray">
        Login
      </Button>
    </header>
  );
};

export default LandingPage;
