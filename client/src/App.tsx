import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Home from "./pages/landing/Home";
import Register from "./pages/auth/Register";
import Header from "./components/layout/Header";
import Features from "./pages/landing/Features";
import Solutions from "./pages/landing/Solutions";
import Resources from "./pages/landing/Resources";

const App = () => {
  const navItems = [
    { label: "Home", path: "/", element: <Home /> },
    { label: "Features", path: "/features", element: <Features /> },
    { label: "Solutions", path: "/solutions", element: <Solutions /> },
    { label: "Resources", path: "/resources", element: <Resources /> },
  ];

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  return (
    <div className="bg-white w-full h-full">
      <Header navItems={navItems} toggleLogin={toggleLoginForm} />
      {showRegisterForm && (
        <Register
          toggleLoginForm={toggleLoginForm}
          toggleRegisterForm={toggleRegisterForm}
        />
      )}
      {showLoginForm && (
        <Login
          toggleLoginForm={toggleLoginForm}
          toggleRegisterForm={toggleRegisterForm}
        />
      )}
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
