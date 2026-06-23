import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import SubmitSolution from "./pages/SubmitSolution";
import Submissions from "./pages/Submissions";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/problems"
        element={
          <ProtectedRoute>
            <Problems />
          </ProtectedRoute>
        }
      />

      <Route
        path="/problems/:id"
        element={
          <ProtectedRoute>
            <ProblemDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/submit/:id"
        element={
          <ProtectedRoute>
            <SubmitSolution />
          </ProtectedRoute>
        }
      />

      <Route
        path="/submissions"
        element={
          <ProtectedRoute>
            <Submissions />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;