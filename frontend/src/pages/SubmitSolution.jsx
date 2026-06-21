import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function SubmitSolution() {

  const { id } = useParams();

  const [code, setCode] = useState("");

  const handleSubmit = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await API.post(
        "/submissions",
        {
          problem_id: id,
          code,
          language: "cpp"
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert(
        `Verdict: ${res.data.verdict}`
      );

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Submission Failed"
      );

    }

  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="card">

          <h1>
            Submit Solution
          </h1>

          <textarea
            rows="18"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            placeholder="Write your C++ code here..."
          />

          <br />
          <br />

          <button
            className="btn"
            onClick={handleSubmit}
          >
            Submit Solution
          </button>

        </div>

      </div>
    </>
  );
}

export default SubmitSolution;