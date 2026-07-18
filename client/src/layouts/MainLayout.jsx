import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer.jsx";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;