import { NavLink } from "react-router-dom";
import Navbar from "./Auth";

export const Nav = () => {
  return (
    <nav className="h-16 w-[85vw] mx-auto flex justify-between items-center my-3 px-4 ">
      {/* Logo Section */}
      <div className="h-full w-[14%] flex items-center justify-center font-bold">
        Logo
      </div>

      {/* Navigation Links */}
      <div className="h-full w-[40%] flex justify-evenly items-center text-lg font-semibold text-zinc-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-zinc-600 border-b-2 border-zinc-900 pb-1"
              : "hover:text-zinc-500 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-zinc-600 border-b-2 border-zinc-900 pb-1"
              : "hover:text-zinc-500 transition"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ?"text-zinc-600 border-b-2 border-zinc-900 pb-1"
              : "hover:text-zinc-500 transition"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <Navbar/>
    </nav>
  );
};
