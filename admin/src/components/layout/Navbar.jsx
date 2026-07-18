import { FiBell, FiUser } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";

const Navbar = () => {
  const { admin } = useContext(AuthContext);

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-700 bg-slate-900 px-8">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Welcome back 👋
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage your portfolio projects.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700">
          <FiBell className="text-xl text-white" />
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600">
            <FiUser className="text-xl text-white" />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {admin?.name || "Admin"}
            </h3>

            <p className="text-sm text-slate-400">
              {admin?.email}
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
