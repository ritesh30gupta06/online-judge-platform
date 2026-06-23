import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Problems() {
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const res = await API.get("/problems");
      setProblems(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed To Fetch Problems");
    }
  };

  const filteredProblems = problems.filter((problem) =>
    problem.title.toLowerCase().includes(search.toLowerCase())
  );

  const getDifficultyClass = (difficulty) => {
    if (!difficulty) return "difficulty-badge";

    const d = difficulty.toLowerCase();

    if (d === "easy") return "difficulty-badge easy";
    if (d === "medium") return "difficulty-badge medium";
    if (d === "hard") return "difficulty-badge hard";

    return "difficulty-badge";
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Coding Problems</h1>

        <input
          type="text"
          placeholder="Search problems by title..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="card"
            >
              <div className="problem-header">
                <h2>{problem.title}</h2>

                <span className={getDifficultyClass(problem.difficulty)}>
                  {problem.difficulty}
                </span>
              </div>

              <p>{problem.description}</p>

              <Link to={`/problems/${problem.id}`}>
                <button className="btn">
                  Solve Problem
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No problems found.</p>
        )}
      </div>
    </>
  );
}

export default Problems;