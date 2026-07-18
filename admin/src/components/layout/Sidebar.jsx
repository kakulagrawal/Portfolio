import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiPlusSquare,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
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
    },
    {
      name: "Add Project",
      path: "/projects/add",
      icon: <FiPlusSquare size={20} />,
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-700 bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-700 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          Portfolio CMS
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
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

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-red-500 hover:text-white">
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
