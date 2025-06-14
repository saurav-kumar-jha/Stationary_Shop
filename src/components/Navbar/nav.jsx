import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="h-16 w-[85vw] mx-auto flex justify-between items-center my-3 px-4">
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
      <div className="h-full w-[40%] flex items-center justify-end gap-4 px-4">
        <button className="bg-white text-zinc-800 px-4 py-1 rounded-full cursor-pointer text-lg font-semibold  hover:bg-zinc-200 transition">
          Login
        </button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer font-semibold text-lg active:scale-95 hover:bg-blue-700 transition duration-75 ease-in-out">
          Register
        </button>
      </div>
    </nav>
  );
};
