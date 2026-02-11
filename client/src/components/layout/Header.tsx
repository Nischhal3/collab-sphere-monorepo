import { FC } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

interface HeaderProps {
  navItems: {
    label: string;
    path: string;
  }[];
  toggleLogin: () => void;
}

const Header: FC<HeaderProps> = ({ navItems, toggleLogin }) => {
  return (
    <header className="flex justify-between items-center p-2 border-b border-gray text-darkNavy ">
      <div className="flex items-center gap-44">
        <div className="font-bold text-xl text-black">C-Sphere logo</div>
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="flex items-center gap-1 text-base cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button
        size="medium"
        label="Login"
        onClick={toggleLogin}
        borderColor="border-gray"
        textColor="text-darkNavy"
      >
        Login
      </Button>
    </header>
  );
};

export default Header;
