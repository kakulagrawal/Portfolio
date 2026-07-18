import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold">404</h1>

      <p>Page not found.</p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
      >
        Back Home
      </Link>
    </main>
  );
}

export default NotFound;