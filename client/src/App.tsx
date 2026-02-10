import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";

const App = () => {
  const navItems = [
    { label: "Home", path: "/", element: <Home /> },
    { label: "Features", path: "/features", element: <Features /> },
    { label: "Solutions", path: "/solutions", element: <Solutions /> },
    { label: "Resources", path: "/resources", element: <Resources /> },
  ];
  return (
    <div className="bg-white w-full h-full">
      <Header navItems={navItems} />
      <main className="flex-1">
        <Routes>
          {navItems.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default App;
