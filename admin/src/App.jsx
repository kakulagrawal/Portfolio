import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import AddProject from "./pages/AddProject.jsx";
import EditProject from "./pages/EditProject.jsx";
import ProtectedRoute from "./components/layout/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            {<Dashboard />}
          </ProtectedRoute>
        }
        />
        <Route path="/projects" element={
          <ProtectedRoute>
          <Projects />
          </ProtectedRoute>
          } />
        <Route path="/projects/add" element={
          <ProtectedRoute>
          <AddProject />
          </ProtectedRoute>
          } />
        <Route path="/projects/edit/:id" element={
          <ProtectedRoute>
          <EditProject/>
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
