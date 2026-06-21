import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {

    try {

      const res = await API.get(
        `/problems/${id}`
      );

      setProblem(res.data);

    } catch (err) {

      console.log(err);

      alert("Failed To Fetch Problem");

    }

  };

  if (!problem) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="card">

          <h1>
            {problem.title}
          </h1>

          <h3>
            Difficulty: {problem.difficulty}
          </h3>

          <p>
            {problem.description}
          </p>

          <h3>
            Sample Input
          </h3>

          <pre>
            {problem.sample_input}
          </pre>

          <h3>
            Sample Output
          </h3>

          <pre>
            {problem.sample_output}
          </pre>

          <br />

          <Link
            to={`/submit/${problem.id}`}
          >
            <button className="btn">
              Submit Solution
            </button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default ProblemDetails;