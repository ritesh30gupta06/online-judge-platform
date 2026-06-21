import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import SubmitSolution from "./pages/SubmitSolution";
import Submissions from "./pages/Submissions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/problems/:id" element={<ProblemDetails />} />
      <Route path="/submit/:id" element={<SubmitSolution />} />
      <Route path="/submissions" element={<Submissions />} />
    </Routes>
  );
}

export default App;