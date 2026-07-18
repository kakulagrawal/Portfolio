import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiPlusSquare,
  FiLogOut,
} from "react-icons/fi";
import toast from "react-hot-toast";

import { AuthContext } from "../../context/authContext.jsx";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FiFolder size={20} />,
      end: true,
    },
    {
      name: "Add Project",
      path: "/projects/add",
      icon: <FiPlusSquare size={20} />,
    },
  ];

  const handleLogout = async () => {
    try {
      console.log("Calling logout...");

      await logout();

      console.log("Logout success");

      toast.success("Logged out successfully.");

      navigate("/", { replace: true });
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <aside className="relative z-20 flex h-screen w-64 flex-col border-r border-slate-700 bg-slate-900 text-white">
      <div className="border-b border-slate-700 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          Portfolio CMS
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-red-500 hover:text-white"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;