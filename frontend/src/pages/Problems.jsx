import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Problems() {

  const [problems, setProblems] = useState([]);

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

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Coding Problems</h1>

        {problems.map((problem) => (

          <div
            key={problem.id}
            className="card"
          >

            <h2>
              {problem.title}
            </h2>

            <p>
              <b>Difficulty:</b> {problem.difficulty}
            </p>

            <p>
              {problem.description}
            </p>

            <Link
              to={`/problems/${problem.id}`}
            >
              <button className="btn">
                Solve Problem
              </button>
            </Link>

          </div>

        ))}

      </div>
    </>
  );
}

export default Problems;